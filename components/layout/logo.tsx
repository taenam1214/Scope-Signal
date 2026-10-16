import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="ScopeSignal home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-navy shadow-sm">
        {/* Signal mark: concentric radar sweep */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2.2" fill="#F59E0B" />
          <path
            d="M12 6.2a5.8 5.8 0 0 1 5.8 5.8"
            stroke="#3B82F6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 2.6a9.4 9.4 0 0 1 9.4 9.4"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={cn("font-display text-lg font-semibold tracking-tight", textColor)}>
        Scope<span className="text-signal">Signal</span>
      </span>
    </Link>
  );
}
