"use client";

import * as React from "react";
import Image from "next/image";

/**
 * Hero video with graceful degradation:
 * - Respects prefers-reduced-motion (shows static poster image instead).
 * - Pauses when scrolled offscreen (IntersectionObserver) to save resources.
 * - Falls back to the static hero image if playback fails.
 * - Muted, looping, inline, no controls.
 */
export function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    const el = videoRef.current;
    if (!el || reduceMotion || failed) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            /* autoplay may be blocked; poster remains visible */
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion, failed, mounted]);

  const showStatic = !mounted || reduceMotion || failed;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-navy shadow-card-lg ring-1 ring-navy/5 lg:aspect-[5/4]">
      {/* Static fallback image (Image 6 — shown for reduced-motion, no-JS, or
          playback failure; rendered underneath the video otherwise). */}
      <Image
        src="/images/hero-construction-manager.png"
        alt="Construction manager wearing a hard hat and reflective vest examining building plans at an active jobsite."
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover"
      />

      {!showStatic && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster="/images/hero-video-poster.jpg"
          aria-hidden="true"
          onError={() => setFailed(true)}
        >
          <source src="/videos/hero-planning-720p.webm" type="video/webm" />
          <source src="/videos/hero-planning-1080p.mp4" type="video/mp4" />
        </video>
      )}

      {/* Subtle gradient for legibility of the overlay chip */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
        aria-hidden
      />

      {/* Floating "finding" chip — clearly illustrative */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/15 bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:left-4 sm:right-auto sm:max-w-[280px]">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber/15">
          <span className="h-2.5 w-2.5 animate-pulse-soft rounded-full bg-amber" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-navy">
            Possible missing change order
          </p>
          <p className="truncate text-[11px] text-muted">
            RFI-042 · needs review
          </p>
        </div>
      </div>
    </div>
  );
}
