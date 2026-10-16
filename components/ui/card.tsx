import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

export function FeatureCard({
  icon: Icon,
  title,
  children,
  accent = "signal",
  delay = 0,
  className,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  accent?: "signal" | "amber" | "navy";
  delay?: number;
  className?: string;
}) {
  const accentStyles = {
    signal: "bg-signal/10 text-signal",
    amber: "bg-amber/15 text-amber",
    navy: "bg-navy text-white",
  }[accent];

  return (
    <Reveal
      delay={delay}
      className={cn(
        "group h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg",
        className
      )}
    >
      <span
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl",
          accentStyles
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{children}</p>
    </Reveal>
  );
}
