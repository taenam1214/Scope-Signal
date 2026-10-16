import { cn } from "@/lib/utils";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="section pt-0">
        <div className="container-wide max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <div
            className={cn(
              "prose-legal mt-10 space-y-8",
              "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy",
              "[&_h2]:mb-3 [&_h2]:mt-2",
              "[&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-ink",
              "[&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-ink",
              "[&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-muted",
              "[&_a]:text-signal [&_a]:underline"
            )}
          >
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
