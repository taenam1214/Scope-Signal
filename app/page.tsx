import Image from "next/image";
import {
  Mail,
  ClipboardCheck,
  TrendingDown,
  Upload,
  ScanSearch,
  GitCompareArrows,
  FileSearch,
  HardHat,
  Users,
  Building2,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/card";
import { HeroVideo } from "@/components/hero-video";
import { DashboardPreview } from "@/components/dashboard-preview";
import { WorkflowIllustration } from "@/components/workflow-illustration";
import { Faq, type FaqItem } from "@/components/faq";

const faqItems: FaqItem[] = [
  {
    q: "What is ScopeSignal?",
    a: "ScopeSignal is an early-stage construction software product being developed to identify potentially undocumented scope changes.",
  },
  {
    q: "Who is it for?",
    a: "We're initially focused on US commercial electrical subcontractors.",
  },
  {
    q: "Does ScopeSignal replace Procore or other construction software?",
    a: "No. Our intended approach is to complement existing systems by identifying possible changes missing from formal tracking workflows.",
  },
  {
    q: "Can ScopeSignal determine whether work is legally billable?",
    a: "No. The system is intended to surface potential issues and supporting evidence. Project teams must determine contractual scope, notice requirements, authorization, and entitlement.",
  },
  {
    q: "Is ScopeSignal available today?",
    a: "We're currently validating the workflow and developing an early product. Interested companies can contact us about participating in research or future pilots.",
  },
  {
    q: "What information would a pilot require?",
    a: "Potential pilots may involve permissioned, appropriately protected historical project records, subject to agreed data-handling terms.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Section 1 — Hero ───────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        {/* Soft background accents */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute -top-24 right-0 h-[480px] w-[480px] rounded-full bg-signal/5 blur-3xl" />
          <div className="absolute left-1/2 top-40 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-amber/5 blur-3xl" />
        </div>

        <div className="container-wide grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
          <div className="animate-fade-up">
            <span className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
              Built for commercial subcontractors
            </span>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl lg:text-[3.5rem]">
              Every scope change deserves to be seen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Potential extra work can get buried in emails, RFIs, and project
              records. ScopeSignal is building a smarter way to identify what may
              have been missed in your change-order logs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Talk to the Founder
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/#how-it-works" variant="secondary" size="lg">
                Explore How It Works
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              Currently exploring pilot opportunities with US commercial
              subcontractors.
            </p>
          </div>

          <div className="relative">
            <HeroVideo />
          </div>
        </div>
      </section>

      {/* ───────────────────── Section 2 — The Problem ───────────────────── */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-navy/5">
                <Image
                  src="/images/project-plan-review.jpg"
                  alt="Two construction professionals reviewing project plans across a table."
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="The problem"
                title="The work happens. The paperwork doesn't always follow."
                description="Construction scope changes can begin as an email, an RFI response, or a field instruction. Even when contractors use project-management software, teams still need to ensure those potential changes become formal entries in the change-order process. That reconciliation can be manual, time-consuming, and vulnerable to missed information."
              />
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <FeatureCard icon={Mail} title="Scattered communication" accent="signal" delay={0}>
              Important instructions can be spread across multiple project records.
            </FeatureCard>
            <FeatureCard icon={ClipboardCheck} title="Manual reconciliation" accent="signal" delay={0.08}>
              Project teams must compare those records against formal change-order
              logs.
            </FeatureCard>
            <FeatureCard icon={TrendingDown} title="Potential revenue exposure" accent="amber" delay={0.16}>
              Poorly documented additional work can create billing disputes,
              delays, and possible revenue loss.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ──────────────────── Section 3 — The Opportunity ──────────────────── */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The opportunity"
            align="center"
            title="What if project records could tell you what was missing?"
            description="ScopeSignal aims to compare source communications with formal change-order records — surfacing potential gaps so nothing important slips through unseen."
          />
          <Reveal className="mt-12" delay={0.1}>
            <WorkflowIllustration />
          </Reveal>
        </div>
      </section>

      {/* ──────────────────── Section 4 — Product Preview ──────────────────── */}
      <section className="section bg-navy">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Product preview"
            align="center"
            title={<span className="text-white">A clearer view of potential missed changes.</span>}
            description={
              <span className="text-white/70">
                A conceptual look at how ScopeSignal could present findings and the
                evidence behind them. Sample data shown for illustration.
              </span>
            }
            className="[&_span.eyebrow]:text-signal-light"
          />
          <Reveal className="mx-auto mt-14 max-w-4xl" delay={0.1}>
            <DashboardPreview />
          </Reveal>
        </div>
      </section>

      {/* ──────────────────── Section 5 — How It Works ──────────────────── */}
      <section id="how-it-works" className="section scroll-mt-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How it works"
            align="center"
            title="From scattered records to actionable visibility."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                icon: Upload,
                title: "Bring project records together",
                body: "Upload permitted emails, RFIs, and change-order registers.",
              },
              {
                n: "02",
                icon: ScanSearch,
                title: "Identify potential changes",
                body: "AI-assisted analysis looks for instructions that may indicate work outside the originally documented scope.",
              },
              {
                n: "03",
                icon: GitCompareArrows,
                title: "Reconcile with existing logs",
                body: "Compare identified events against recorded changes.",
              },
              {
                n: "04",
                icon: FileSearch,
                title: "Review supporting evidence",
                body: "Give project managers a clear view of possible omissions and the documentation behind them.",
              },
            ].map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 0.08}
                className="relative h-full rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-2xl font-semibold text-line">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8" delay={0.1}>
            <p className="mx-auto max-w-2xl rounded-xl border border-line bg-surface px-5 py-4 text-center text-sm text-muted">
              The project team remains responsible for verifying scope,
              contractual entitlement, and submission decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ──────────────── Section 6 — Who We're Building For ──────────────── */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Who we're building for"
                title="Built around the people managing complex projects."
                description="We're starting with commercial electrical subcontractors, with plans to explore mechanical, plumbing, and other specialty trades over time."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {["Mechanical contractors", "Plumbing contractors", "Specialty trades"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {t} · exploring
                    </span>
                  )
                )}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-navy/5">
                <Image
                  src="/images/electrician-installation.jpg"
                  alt="Electrician in a white hard hat installing electrical wiring inside a commercial building."
                  width={1024}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <FeatureCard icon={HardHat} title="Project Managers" accent="navy" delay={0}>
              Spend less time manually cross-checking records and more time acting
              on what matters, with documentation in one place.
            </FeatureCard>
            <FeatureCard icon={Users} title="Operations Leaders" accent="navy" delay={0.08}>
              Gain more consistent visibility into potential changes across
              projects, reducing reliance on individual memory.
            </FeatureCard>
            <FeatureCard icon={Building2} title="Company Owners" accent="navy" delay={0.16}>
              Support more complete documentation of work performed, helping
              reduce the risk of changes going unrecorded.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ───────────── Section 7 — Works Alongside Existing Tools ───────────── */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Fits your workflow"
            align="center"
            title="Designed to complement your existing workflows."
            description="ScopeSignal is not intended to replace your project-management or accounting software. Instead, it aims to help identify potential gaps between original project communications and formally recorded change events."
          />
          <Reveal className="mx-auto mt-12 max-w-4xl" delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                "Email communication",
                "RFIs",
                "Change-order registers",
                "Document exports",
                "Project records",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-center rounded-xl border border-line bg-white px-4 py-6 text-center text-sm font-medium text-navy shadow-card"
                >
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────── Section 8 — About ScopeSignal ──────────────────── */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl shadow-card-lg ring-1 ring-navy/5">
                <Image
                  src="/images/construction-team.jpg"
                  alt="Five construction professionals wearing hard hats and reflective vests reviewing drawings together."
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="About ScopeSignal"
                title="Building better visibility into construction changes."
                description="ScopeSignal was started with a simple question: what happens to potential scope changes that never enter the system designed to track them? We're developing technology to help subcontractors find possible gaps between project communications and formal change-order records. Our approach emphasizes evidence, practical workflows, and human review."
              />

              {/* Founder placeholder */}
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface text-muted ring-1 ring-line">
                  {/* [PLACEHOLDER] Founder photograph */}
                  <HardHat className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-navy">
                    [Founder Name]
                  </p>
                  <p className="text-sm text-muted">[Founder Title], ScopeSignal</p>
                  <a
                    href="#"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:underline"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
              <Button href="/about" variant="secondary" className="mt-6">
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Section 9 — Early Design Partners ──────────────── */}
      <section className="section">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Early design partners"
                title="Help shape what we're building."
                description="We're speaking with commercial subcontractors to understand how potential scope changes are identified, documented, and reconciled today. If you manage commercial construction projects, we'd value your perspective."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact?topic=pilot" size="lg">
                  Speak With Our Founder
                </Button>
                <Button href="/contact?topic=early-access" variant="secondary" size="lg">
                  Request Early Access
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium text-muted">
                <Sparkles className="h-4 w-4 text-amber" />
                A brief conversation. No sales pitch.
              </p>
            </div>

            <Reveal delay={0.1} className="mx-auto w-full max-w-[320px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy shadow-card-lg ring-1 ring-navy/5">
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
        </div>
      </section>

      {/* ──────────────────────── Section 10 — FAQ ──────────────────────── */}
      <section id="faq" className="section scroll-mt-20 bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="FAQ"
            align="center"
            title="Questions, answered honestly."
          />
          <Reveal className="mx-auto mt-12 max-w-3xl" delay={0.1}>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── Section 11 — Final CTA ──────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-signal/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        </div>
        <div className="container-wide relative text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s make missed project changes easier to find.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              We&apos;re looking to learn from construction professionals who manage
              project changes every day.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Talk to the Founder
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
