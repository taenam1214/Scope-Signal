"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, TOPICS } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<string, string>>;

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-signal/40";

export function ContactForm() {
  const params = useSearchParams();
  const initialTopic = React.useMemo(() => {
    const t = params.get("topic");
    return TOPICS.some((o) => o.value === t) ? (t as string) : "";
  }, [params]);

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [errors, setErrors] = React.useState<Errors>({});
  const [formError, setFormError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      role: String(fd.get("role") ?? ""),
      topic: String(fd.get("topic") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    // Client-side validation (mirror of server schema)
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      // Focus first invalid field
      const firstKey = Object.keys(next)[0];
      const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setFormError(
          data.error ?? "Something went wrong. Please try again in a moment."
        );
        setStatus("idle");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setFormError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-semibold text-navy">
          Thanks — your message is on its way.
        </h3>
        <p className="mt-2 text-muted">
          We read every note personally and will get back to you soon. No sales
          pitch — just a conversation.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {formError && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{formError}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="fullName" error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jordan Rivera"
            className={cn(fieldBase, errors.fullName ? "border-red-300" : "border-line")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field label="Work email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(fieldBase, errors.email ? "border-red-300" : "border-line")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field label="Company" name="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Rivera Electric"
            className={cn(fieldBase, errors.company ? "border-red-300" : "border-line")}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
        </Field>

        <Field label="Role" name="role" error={errors.role}>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="Project Manager"
            className={cn(fieldBase, errors.role ? "border-red-300" : "border-line")}
            aria-invalid={!!errors.role}
            aria-describedby={errors.role ? "role-error" : undefined}
          />
        </Field>
      </div>

      <Field label="What would you like to discuss?" name="topic" error={errors.topic}>
        <select
          id="topic"
          name="topic"
          defaultValue={initialTopic}
          className={cn(
            fieldBase,
            "appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10",
            errors.topic ? "border-red-300" : "border-line"
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='m6 8 4 4 4-4' stroke='%2364748B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          }}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          <option value="" disabled>
            Select a topic…
          </option>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us a bit more" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you working on, and what would be most useful to talk through?"
          className={cn(
            fieldBase,
            "resize-y",
            errors.message ? "border-red-300" : "border-line"
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {/* Honeypot field — hidden from humans, left empty */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted sm:max-w-xs">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="text-signal underline">
            Privacy Policy
          </a>
          . We&apos;ll only use your details to respond to your inquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
