import { Mail, GitCompareArrows, Flag, UserCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Mail,
    title: "Project email / RFI / field instruction",
    tone: "neutral",
  },
  {
    icon: Zap,
    title: "Potential scope change identified",
    tone: "signal",
  },
  {
    icon: GitCompareArrows,
    title: "Compare with change-order register",
    tone: "signal",
  },
  {
    icon: Flag,
    title: "Flag possible missing entry",
    tone: "amber",
  },
  {
    icon: UserCheck,
    title: "Human review",
    tone: "navy",
  },
] as const;

const toneStyles: Record<string, { box: string; icon: string }> = {
  neutral: { box: "border-line bg-white", icon: "bg-surface text-muted" },
  signal: { box: "border-signal/25 bg-signal/[0.04]", icon: "bg-signal/10 text-signal" },
  amber: { box: "border-amber/35 bg-amber/[0.06]", icon: "bg-amber/15 text-amber" },
  navy: { box: "border-navy/15 bg-navy/[0.03]", icon: "bg-navy text-white" },
};

export function WorkflowIllustration({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7",
        className
      )}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-2">
        {steps.map((step, i) => {
          const tone = toneStyles[step.tone];
          return (
            <div key={step.title} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-2">
              <div
                className={cn(
                  "flex w-full flex-1 flex-col items-start gap-3 rounded-xl border p-4 lg:items-center lg:text-center",
                  tone.box
                )}
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg",
                    tone.icon
                  )}
                >
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="text-[13px] font-semibold leading-snug text-navy">
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <>
                  {/* Arrow: vertical on mobile, horizontal on desktop */}
                  <svg
                    className="h-5 w-5 shrink-0 rotate-90 text-signal lg:hidden"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M4 10h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg
                    className="hidden h-5 w-5 shrink-0 self-center text-signal lg:block"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M4 10h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
