import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { contactSchema, TOPICS } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function topicLabel(value: string): string {
  return TOPICS.find((t) => t.value === value)?.label ?? value;
}

export async function POST(req: Request) {
  // 1. Rate limit (best-effort, per-IP)
  const ip = getClientIp(req);
  const limited = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  // 2. Parse + validate (server-side)
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // 3. Honeypot — silently accept but drop obvious bots
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    ip,
    fullName: data.fullName,
    email: data.email,
    company: data.company,
    role: data.role,
    topic: topicLabel(data.topic),
    message: data.message,
  };

  // 4. Deliver via Resend if configured; otherwise persist to local file.
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "taenamkim@scope-signal.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "ScopeSignal <onboarding@resend.dev>";

  try {
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: data.email,
        subject: `New ScopeSignal inquiry — ${submission.topic}`,
        text: [
          `Topic: ${submission.topic}`,
          `Name: ${submission.fullName}`,
          `Email: ${submission.email}`,
          `Company: ${submission.company}`,
          `Role: ${submission.role}`,
          "",
          "Message:",
          submission.message,
          "",
          `Received: ${submission.receivedAt}`,
          `IP: ${submission.ip}`,
        ].join("\n"),
      });
      if (error) {
        console.error("[contact] Resend error:", error);
        return NextResponse.json(
          { ok: false, error: "We couldn't send your message. Please try again." },
          { status: 502 }
        );
      }
    } else {
      // Local development fallback: append to a JSONL file so submissions are
      // genuinely persisted (never a silent no-op). Configure Resend for prod.
      const dir = path.join(process.cwd(), ".submissions");
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(
        path.join(dir, "submissions.jsonl"),
        JSON.stringify(submission) + "\n",
        "utf8"
      );
      console.warn(
        "[contact] RESEND_API_KEY not set — submission written to ./.submissions/submissions.jsonl"
      );
    }
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
