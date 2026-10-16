import type { Metadata } from "next";
import Image from "next/image";
import {
  Upload,
  ScanSearch,
  GitCompareArrows,
  FileSearch,
  ArrowRight,
  FileText,
  Mail,
  CircleDot,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DashboardPreview } from "@/components/dashboard-preview";
import { WorkflowIllustration } from "@/components/workflow-illustration";

export const metadata: Metadata = {
  title: "Product",
  description:
    "How ScopeSignal is designed to work: bring project records together, identify potential scope changes, reconcile against change-order logs, and review the supporting evidence.",
  alternates: { canonical: "/product" },
};

const steps = [
  {
    icon: Upload,
    n: "01",
    title: "Bring project records together",
    body: "Upload permitted emails, RFIs, and change-order registers. ScopeSignal is designed to work with the records you already produce — no new field process to adopt.",
  },
  {
    icon: ScanSearch,
    n: "02",
    title: "Identify potential changes",
    body: "AI-assisted analysis looks for instructions that may indicate work outside the originally documented scope — the kind of request that often starts in an email before it reaches the log.",
  },
  {
    icon: GitCompareArrows,
    n: "03",
    title: "Reconcile with existing logs",
    body: "Identified events are compared against your recorded change orders so you can see where a potential change may not have a matching formal entry.",
  },
  {
    icon: FileSearch,
    n: "04",
    title: "Review supporting evidence",
    body: "Each potential finding is presented with the source records behind it, so a project manager can quickly judge whether it's worth pursuing.",
  },
];

const canDo = [
  "Surface potential scope changes that may be missing from your change-order register",
  "Link each finding back to the source email, RFI, or field record",
  "Help standardize how teams review potential omissions across projects",
];

const cannotDo = [
  "Decide whether work is contractually billable or entitled",
  "Replace your project-management or accounting system",
  "Submit change orders or make commercial decisions on your behalf",
];

export default function ProductPage() {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero */}
      <section className="section pt-0">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
              The product
            </span>
            <h1 className="text-balance font-display text-4xl font-semibold text-navy sm:text-5xl">
              Catch missed scope changes before they become lost revenue.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              ScopeSignal is being developed to compare the communications where
              work actually gets requested against your formal change-order
              register — bringing overlooked changes and their supporting evidence
              into view for human review.
            </p>
            <div className="mt-8">
              <Button href="/contact?topic=pilot" size="lg">
                Explore a pilot <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Reveal className="mx-auto mt-16 max-w-4xl">
            <DashboardPreview />
          </Reveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="section bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The proposed workflow"
            align="center"
            title="A simple path from scattered records to clear findings."
          />
          <Reveal className="mt-12">
            <WorkflowIllustration />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {steps.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 0.06}
                className="flex gap-5 rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/10 text-signal">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-2 font-mono text-xs text-muted">{step.n}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample evidence review */}
      <section className="section">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Evidence review"
                title="Every finding, traceable to its source."
                description="ScopeSignal is designed so that no potential change is a black box. Each flagged item is intended to show the records it came from and how it compares to what's already logged — so the decision stays with your team."
              />
              <div className="mt-6 overflow-hidden rounded-2xl shadow-card ring-1 ring-navy/5">
                <Image
                  src="/images/electrical-control-panel.jpg"
                  alt="Electrician working on a commercial electrical control panel."
                  width={1024}
                  height={683}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Illustrative evidence card */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-white p-6 shadow-card-lg">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Illustrative evidence view
                  </span>
                  <span className="rounded-full bg-amber/15 px-2.5 py-1 text-[11px] font-semibold text-amber">
                    Needs review
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/15">
                    <CircleDot className="h-4 w-4 text-amber" />
                  </span>
                  <div>
                    <p className="font-semibold text-navy">
                      Additional electrical conduit requested
                    </p>
                    <p className="text-sm text-muted">Finding #SS-1042</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-line bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                      <Mail className="h-4 w-4 text-signal" /> Source record
                    </div>
                    <p className="mt-1.5 text-sm text-navy">RFI-042 · May 14</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      &ldquo;…please run additional conduit to the east riser per
                      the revised panel schedule…&rdquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-line bg-surface/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-navy">
                      <FileText className="h-4 w-4 text-signal" /> Change-order
                      register
                    </div>
                    <p className="mt-1.5 text-sm text-navy">0 matching entries</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      No corresponding entry found in the uploaded register.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-sm text-muted">Reviewer status</span>
                  <span className="text-sm font-semibold text-amber">
                    Open · assigned to PM
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Limitations — what it does / doesn't do */}
      <section className="section bg-surface">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Honest limitations"
            align="center"
            title="What ScopeSignal is — and isn't."
            description="We think clarity builds trust. Here's how we think about the boundaries of the product."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" /> Designed to
              </h3>
              <ul className="mt-4 space-y-3">
                {canDo.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                <XCircle className="h-5 w-5 text-muted" /> Not intended to
              </h3>
              <ul className="mt-4 space-y-3">
                {cannotDo.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
            The project team remains responsible for verifying scope, contractual
            entitlement, notice requirements, and submission decisions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div className="container-wide text-center">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Curious whether this fits your projects?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We&apos;re exploring pilots with US commercial subcontractors.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact?topic=pilot" size="lg">
                Explore a pilot <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact?topic=early-access" variant="secondary" size="lg">
                Request early access
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
