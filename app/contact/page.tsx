import { Suspense } from "react";
import type { Metadata } from "next";
import { MessageSquare, Handshake, Clock, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Design Partners",
  description:
    "Talk to the ScopeSignal founder about feedback, pilots, or early access. A brief conversation — no sales pitch.",
  alternates: { canonical: "/contact" },
};

const points = [
  {
    icon: MessageSquare,
    title: "A real conversation",
    body: "We're in customer discovery. Your perspective directly shapes what we build.",
  },
  {
    icon: Handshake,
    title: "Design-partner friendly",
    body: "If you manage commercial projects, we'd love to explore a pilot with you.",
  },
  {
    icon: Clock,
    title: "No sales pitch",
    body: "A brief, honest discussion about how scope changes get tracked today.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="section pt-0">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Left: invitation */}
            <div>
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
                Talk to the founder
              </span>
              <h1 className="text-balance font-display text-4xl font-semibold text-navy sm:text-5xl">
                Let&apos;s talk about missed scope changes.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Whether you want to share feedback, explore a pilot, or request
                early access, we&apos;d value your perspective. Tell us a little about
                your work and we&apos;ll be in touch.
              </p>

              <ul className="mt-10 space-y-6">
                {points.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-navy">
                        {p.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-line bg-surface/60 p-5">
                <p className="text-sm font-medium text-navy">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-signal hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Right: form */}
            <Reveal className="rounded-3xl border border-line bg-surface/50 p-6 shadow-card sm:p-8">
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
