import {
  LayoutDashboard,
  FolderKanban,
  ScanSearch,
  FileText,
  BarChart3,
  Search,
  CircleDot,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderKanban, label: "Projects" },
  { icon: ScanSearch, label: "Audit Findings" },
  { icon: FileText, label: "Evidence" },
  { icon: BarChart3, label: "Reports" },
];

const metrics = [
  { label: "Documents reviewed", value: "1,284", hint: "this project" },
  { label: "Potential changes detected", value: "17", hint: "across sources" },
  { label: "Items requiring review", value: "6", hint: "flagged", accent: true },
];

/**
 * Conceptual ScopeSignal dashboard. All data is fictional sample data and the
 * UI is clearly labeled as an illustrative product concept.
 */
export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Concept label */}
      <div className="absolute -top-3 left-6 z-10">
        <span className="rounded-full border border-line bg-white px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted shadow-sm">
          Product concept · illustrative preview
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card-lg">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
          <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
          <div className="ml-3 hidden items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-line sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            app.scope-signal.com
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
          {/* Sidebar */}
          <aside className="hidden flex-col gap-1 border-r border-line bg-navy p-3 sm:flex">
            <div className="mb-3 px-2 py-1.5">
              <span className="font-display text-sm font-semibold text-white">
                Scope<span className="text-signal-light">Signal</span>
              </span>
            </div>
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium",
                  item.active
                    ? "bg-signal text-white"
                    : "text-white/60"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="bg-surface/60 p-4 sm:p-5">
            {/* Top bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs text-muted">Project</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-navy">
                    Riverside Medical Center — Electrical
                  </span>
                  <svg className="h-4 w-4 text-muted" viewBox="0 0 20 20" fill="none">
                    <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs text-muted ring-1 ring-line">
                <Search className="h-3.5 w-3.5" />
                Search records
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className={cn(
                    "rounded-xl border bg-white p-3",
                    m.accent ? "border-amber/40 ring-1 ring-amber/20" : "border-line"
                  )}
                >
                  <p className="text-[11px] leading-tight text-muted">{m.label}</p>
                  <p
                    className={cn(
                      "mt-1.5 font-display text-2xl font-semibold tabular-nums",
                      m.accent ? "text-amber" : "text-navy"
                    )}
                  >
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted">{m.hint}</p>
                </div>
              ))}
            </div>

            {/* Detection card */}
            <div className="mt-4 rounded-xl border border-line bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber/15">
                    <CircleDot className="h-4 w-4 text-amber" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Additional electrical conduit requested
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      Source: RFI-042 and follow-up email
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-amber/15 px-2.5 py-1 text-[11px] font-semibold text-amber">
                  Needs review
                </span>
              </div>
              <p className="mt-3 rounded-lg bg-surface px-3 py-2 text-xs leading-relaxed text-ink">
                No corresponding entry found in the uploaded change-order register.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  Finding #SS-1042
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-signal px-3 py-1.5 text-[11px] font-semibold text-white">
                  Review evidence
                </span>
              </div>
            </div>

            {/* Evidence panel */}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Source record
                </p>
                <p className="mt-1.5 text-xs font-medium text-navy">RFI-042 · May 14</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted">
                  &ldquo;…please run additional conduit to the east riser per the
                  revised panel schedule…&rdquo;
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Related CO entries
                </p>
                <p className="mt-1.5 text-xs font-medium text-navy">0 matches found</p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted">
                  Reviewer status: <span className="text-amber">Open</span> · assigned
                  to PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
