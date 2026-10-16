import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "ScopeSignal",
  domain: "scope-signal.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scope-signal.com",
  tagline: "Better visibility into construction changes.",
  email: "taenamkim@scope-signal.com",
  description:
    "ScopeSignal is developing AI-assisted tools to help commercial subcontractors identify potentially missed scope changes across project communications and change-order records.",
};
