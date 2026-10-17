import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Target, Eye, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "ScopeSignal is an early-stage construction technology company developing AI-assisted tools to help subcontractors find scope changes missing from formal change-order records.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Eye,
    title: "Evidence first",
    body: "Every potential finding should point back to the source record behind it — not a black box.",
  },
  {
    icon: ShieldCheck,
    title: "Human in the loop",
    body: "The system surfaces possibilities. People decide what's real, billable, and worth pursuing.",
  },
  {
    icon: Target,
    title: "Practical over flashy",
    body: "We're building for how project teams actually work, not for a demo.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero */}
      <section className="section pt-0">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
              About ScopeSignal
            </span>
            <h1 className="text-balance font-display text-4xl font-semibold text-navy sm:text-5xl">
              Building better visibility into construction changes.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              ScopeSignal was started with a simple question: what happens to
              potential scope changes that never enter the system designed to
              track them? We&apos;re developing technology to help subcontractors
              find possible gaps between project communications and formal
              change-order records — with evidence, practical workflows, and human
              review at the center.
            </p>
          </div>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-3xl shadow-card-lg ring-1 ring-navy/5">
              <Image
                src="/images/construction-team.jpg"
                alt="Five construction professionals wearing hard hats and reflective vests reviewing drawings together."
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin / why */}
      <section className="section bg-surface">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Why we're building it"
            title="Change happens faster than paperwork."
            description="On active commercial projects, instructions arrive by email, RFI response, and field conversation. Project-management software is great at tracking changes once they're entered — but someone still has to notice the change, connect the dots across records, and log it. When that reconciliation is manual, things fall through the cracks."
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              We think there&apos;s an opportunity to help teams catch potential
              omissions earlier — by comparing the communications where work
              actually gets requested against the formal change-order register.
            </p>
            <p>
              We&apos;re deliberately not trying to replace the tools you already
              rely on. ScopeSignal is designed to sit alongside them and answer a
              narrower question:{" "}
              <span className="font-medium text-navy">
                is anything missing from the log?
              </span>
            </p>
            <p>
              As an early-stage company, we&apos;re in active customer discovery.
              What we build next depends on conversations with the people who live
              this problem every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How we work"
            align="center"
            title="Principles guiding the product."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.08}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder + vision video */}
      <section className="section bg-surface">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Founder"
              title="A founder-led effort, grounded in the field."
              description="ScopeSignal is being built in close conversation with the commercial subcontractors it's designed to serve."
            />

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-card sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                <Image
                  src="/images/founder-taenam-kim.jpeg"
                  alt="Taenam Kim, Founder & CEO of ScopeSignal"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-navy">Taenam Kim</p>
                <p className="text-sm text-muted">Founder &amp; CEO, ScopeSignal</p>
                <a
                  href="https://www.linkedin.com/in/taenamkim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:underline"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn profile
                </a>
              </div>
            </div>
          </div>

          <Reveal delay={0.1} className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-navy shadow-card-lg ring-1 ring-navy/5">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                poster="/images/team-review-poster.jpg"
                aria-hidden="true"
              >
                <source src="/videos/team-review-mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="container-wide text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Want to help shape it?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We&apos;re speaking with commercial subcontractors about how scope
              changes get tracked today.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Contact us <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
