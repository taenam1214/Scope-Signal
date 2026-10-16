import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const INTRINSIC = { width: 1595, height: 417 };

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  /** "dark" = for light backgrounds (navy wordmark); "light" = for dark backgrounds (white wordmark). */
  variant?: "dark" | "light";
}) {
  const src =
    variant === "light"
      ? "/brand/logo_full_light.png"
      : "/brand/logo_full.png";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="ScopeSignal home"
    >
      <Image
        src={src}
        alt="ScopeSignal"
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        priority={variant === "dark"}
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
