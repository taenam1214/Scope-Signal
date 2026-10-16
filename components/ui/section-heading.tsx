import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tag?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tag = "h2",
}: Props) {
  const Tag = tag;
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="eyebrow mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "text-balance font-display font-semibold text-navy",
          tag === "h1"
            ? "text-4xl sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
            : "text-3xl sm:text-4xl"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
