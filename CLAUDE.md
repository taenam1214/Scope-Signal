# CLAUDE.md

Guidance for working in this repository.

## What this is

Marketing website for **ScopeSignal**, an early-stage construction-tech company.
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Motion · deployed on Vercel.
Production domain: `scope-signal.com`. See `README.md` for full setup/deploy docs.

## Commands

```bash
npm run dev     # dev server (localhost:3000)
npm run build   # production build (run this to typecheck before committing)
npm start       # serve the production build
npm run lint    # eslint
```

## Architecture notes

- **Pages** live in `app/*/page.tsx`. The homepage (`app/page.tsx`) holds all 11
  marketing sections inline; other pages reuse the same shared components.
- **Shared components** are in `components/` — `ui/` holds primitives (`Button`,
  `Reveal`, `SectionHeading`, `FeatureCard`, `Faq`). The conceptual product UI is
  `dashboard-preview.tsx` + `workflow-illustration.tsx`.
- **Design tokens** are in `tailwind.config.ts` — use the named brand colors
  (`navy`, `signal`, `signal-light`, `amber`, `ink`, `muted`, `line`, `surface`),
  not raw hex. Fonts: `font-display` (Geist) for headings, `font-sans` (Inter) for
  body, `font-mono` (Geist Mono) for data labels.
- **Animation**: use the `Reveal` component (wraps Motion) for scroll-in entrances.
  It already respects `prefers-reduced-motion`. Keep motion restrained.
- **Contact form**: validation schema is shared in `lib/contact-schema.ts` (client
  + server). The API route is `app/api/contact/route.ts` (validate → rate-limit →
  honeypot → Resend-or-file). Never reduce this to a fake success toast.

## Content & credibility rules (IMPORTANT)

This company is pre-product and in customer discovery. When editing copy, **do not**
invent: customers, testimonials, revenue/recovery statistics, integration
partnerships, security certifications, founder credentials, or claims that the
product is generally available. Prefer "building / developing / designed to /
potential / evidence-backed / human-reviewed." The product dashboard must stay
labeled as an illustrative concept.

## Assets

- Images/videos are optimized in `public/`. Source files are in `~/Downloads`.
- Video transcoding uses `ffmpeg`. Reference commands:
  ```bash
  # Hero 4K -> 1080p MP4 (no audio)
  ffmpeg -i SRC.mp4 -vf scale=-2:1080 -an -c:v libx264 -preset slow -crf 24 \
    -pix_fmt yuv420p -movflags +faststart public/videos/hero-planning-1080p.mp4
  # Hero 4K -> 720p WebM
  ffmpeg -i SRC.mp4 -vf scale=-2:720 -an -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 \
    public/videos/hero-planning-720p.webm
  ```
- The two iStock images (`electrician-installation.jpg`, `electrical-control-panel.jpg`)
  require confirmed commercial licenses before launch.

## Pre-launch placeholders

Search for `[Founder` and `href="#"` in `app/`. See the full checklist in
`README.md` → "Placeholders to replace before launch."
