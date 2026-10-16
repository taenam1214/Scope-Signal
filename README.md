# ScopeSignal — Website

Premium marketing site for **ScopeSignal**, an early-stage construction-technology
company developing AI-assisted tooling to help commercial subcontractors identify
potentially missed scope changes across project communications and change-order
records.

**Production domain:** https://scope-signal.com

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Motion (Framer
Motion) · Lucide icons**, deployed on **Vercel**.

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Local development](#local-development)
3. [Environment variables](#environment-variables)
4. [Contact form](#contact-form)
5. [Project structure](#project-structure)
6. [Media assets](#media-assets)
7. [Deploying to Vercel](#deploying-to-vercel)
8. [Connecting the GoDaddy domain (scope-signal.com)](#connecting-the-godaddy-domain-scope-signalcom)
9. [⚠️ Placeholders to replace before launch](#️-placeholders-to-replace-before-launch)

---

## Tech stack

| Area        | Choice                                             |
| ----------- | -------------------------------------------------- |
| Framework   | Next.js 15 (App Router, React 19)                  |
| Language    | TypeScript (strict)                                |
| Styling     | Tailwind CSS 3.4 + `tailwindcss-animate`           |
| Animation   | `motion` (Framer Motion) — restrained, reduced-motion aware |
| Icons       | `lucide-react`                                     |
| Fonts       | Geist / Geist Mono (`geist`) + Inter (`next/font`) |
| Email       | Resend (contact form)                              |
| Validation  | Zod (shared client + server schema)               |
| Hosting     | Vercel                                             |

---

## Local development

Requires **Node.js 18.18+** (tested on Node 24).

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in values (optional for local dev — see below)
cp .env.example .env.local

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm start       # run the production build locally
npm run lint    # eslint
```

---

## Environment variables

See [`.env.example`](./.env.example). All are optional for local development.

| Variable              | Required         | Purpose                                              |
| --------------------- | ---------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`| Recommended      | Canonical URL, sitemap, Open Graph. Defaults to `https://scope-signal.com`. |
| `RESEND_API_KEY`      | **Prod only**    | Enables real email delivery of contact submissions.  |
| `CONTACT_FROM_EMAIL`  | With Resend      | Verified "from" sender on your Resend account.       |
| `CONTACT_TO_EMAIL`    | With Resend      | Inbox that receives submissions (`taenamkim@scope-signal.com`). |

---

## Contact form

The contact form (`/contact`, plus CTAs that deep-link with `?topic=`) is fully
functional, not a fake success toast:

- **Shared validation** — the same Zod schema runs on the client (instant inline
  errors, accessible `aria-invalid` / `aria-describedby`) and again **server-side**
  in `app/api/contact/route.ts`.
- **Spam protection** — a hidden honeypot field; bot submissions are silently
  accepted and dropped.
- **Rate limiting** — best-effort in-memory limiter (5 requests / minute / IP). For
  high traffic, back this with Vercel KV / Upstash Redis (see `lib/rate-limit.ts`).
- **Delivery** —
  - If `RESEND_API_KEY` is set → the submission is emailed via Resend to
    `CONTACT_TO_EMAIL`, with the sender's address as `reply-to`.
  - If it is **not** set (local dev) → the submission is appended to
    `./.submissions/submissions.jsonl` so nothing is silently lost. **This file
    fallback does not work reliably on Vercel** (ephemeral filesystem) — configure
    Resend for production.

### Setting up Resend

1. Create an account at [resend.com](https://resend.com) and add an API key.
2. Verify the `scope-signal.com` domain in Resend (adds DNS records — see the
   GoDaddy section) so you can send from `hello@scope-signal.com`.
   Until verified, keep `CONTACT_FROM_EMAIL="ScopeSignal <onboarding@resend.dev>"`.
3. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in Vercel.

---

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, header/footer, skip link
  page.tsx              Homepage (all 11 sections)
  product/page.tsx      Product page (workflow, evidence review, limitations)
  about/page.tsx        About page (mission, values, founder, vision video)
  contact/page.tsx      Contact page (invitation + working form)
  privacy/page.tsx      Privacy Policy (matches actual data practices)
  terms/page.tsx        Terms of Use
  api/contact/route.ts  Contact form handler (validate → rate-limit → deliver)
  sitemap.ts            XML sitemap
  robots.ts             robots.txt
  opengraph-image.tsx   Dynamic 1200×630 social preview
  icon.tsx              Favicon
components/
  layout/               Header (sticky, mobile menu), Footer, Logo
  ui/                   Button, Reveal, SectionHeading, FeatureCard, Faq
  hero-video.tsx        Reduced-motion / offscreen-pause / fallback-aware video
  dashboard-preview.tsx Conceptual product dashboard (labeled illustrative)
  workflow-illustration.tsx  Custom navy/blue/amber workflow diagram
  contact-form.tsx      Client form with validation + states
  legal-page.tsx        Shared legal layout
lib/
  utils.ts              cn() + site config (name, domain, email)
  contact-schema.ts     Shared Zod schema + topic options
  rate-limit.ts         In-memory rate limiter
public/
  images/               Optimized photos + video posters
  videos/               Web-optimized MP4 / WebM
```

---

## Media assets

Source files from `~/Downloads` were processed into web-ready assets with
`ffmpeg`:

| In repo                                   | Source                                  | Used in |
| ----------------------------------------- | --------------------------------------- | ------- |
| `images/hero-construction-manager.png`    | `snehasreegraphic-...png` (Image 6)     | Hero static fallback |
| `images/project-plan-review.jpg`          | `pexels-thisisengineering-...jpg` (5)   | Problem section |
| `images/construction-team.jpg`            | `pexels-harrun-...jpg` (4)              | Home About + About page |
| `images/electrician-installation.jpg`     | `istockphoto-2154485177...jpg` (1) ⚠️   | "Who we build for" |
| `images/electrical-control-panel.jpg`     | `istockphoto-2166685594...jpg` (2) ⚠️   | Product page |
| `videos/hero-planning-1080p.mp4`          | `6285692-uhd...mp4` (Video 1) → 1080p   | Hero video (MP4 fallback) |
| `videos/hero-planning-720p.webm`          | `6285692-uhd...mp4` (Video 1) → 720p    | Hero video (preferred) |
| `videos/team-review-mobile.mp4`           | `15758320...mp4` (Video 2)              | Design-partner + About vertical video |
| `images/hero-video-poster.jpg`            | frame from Video 1                      | Hero video poster |
| `images/team-review-poster.jpg`           | frame from Video 2                      | Vertical video poster |

The 28 MB 4K hero video was transcoded to **3.2 MB (1080p MP4)** and **1.1 MB
(720p WebM)**. Image 3 (utility lineworkers) is intentionally unused and was kept
out of the bundle; the original remains in `~/Downloads`.

To regenerate the optimized videos, install `ffmpeg` (`brew install ffmpeg`) and
re-run the transcode commands (documented in git history / `CLAUDE.md`).

⚠️ = iStock images — **license must be confirmed before launch** (see below).

---

## Deploying to Vercel

### Option A — Vercel dashboard (recommended)

1. Push this repo to GitHub (already wired to `github.com/taenam1214/Scope-Signal`):
   ```bash
   git add -A && git commit -m "Build ScopeSignal website" && git push
   ```
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the GitHub repo.
3. Vercel auto-detects Next.js — no build config changes needed.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`,
   `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.
5. Click **Deploy**. You'll get a `*.vercel.app` URL.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run: links/creates the project
vercel --prod   # deploy to production
```

---

## Connecting the GoDaddy domain (scope-signal.com)

After the project is deployed on Vercel:

1. **In Vercel:** open the project → **Settings → Domains** → add `scope-signal.com`
   and `www.scope-signal.com`. Vercel will show the DNS records it expects.

2. **In GoDaddy:** sign in → **My Products → Domains → scope-signal.com → DNS**
   (Manage DNS), then set:

   | Type  | Name  | Value                   | Notes |
   | ----- | ----- | ----------------------- | ----- |
   | `A`   | `@`   | `76.76.21.21`           | Apex → Vercel |
   | `CNAME` | `www` | `cname.vercel-dns.com` | www → Vercel |

   > Always use the exact values Vercel shows in **Settings → Domains** — they can
   > change. Delete any conflicting GoDaddy "Parked"/forwarding A or CNAME records
   > for `@` and `www` first.

3. **Primary domain & redirect:** in Vercel, set `scope-signal.com` as primary
   (or `www`, per preference); Vercel auto-redirects the other and provisions a
   free SSL certificate.

4. **Propagation:** DNS changes typically apply within minutes but can take up to
   24–48 hours. Verify with `dig scope-signal.com` or
   [dnschecker.org](https://dnschecker.org).

5. **(For Resend email)** add the DKIM/SPF/return-path records Resend provides for
   `scope-signal.com` in the same GoDaddy DNS panel, then verify the domain in
   Resend. This lets the contact form send from a `@scope-signal.com` address.

---

## ⚠️ Placeholders to replace before launch

| Item | Where | Action |
| ---- | ----- | ------ |
| **iStock image licenses** | `electrician-installation.jpg`, `electrical-control-panel.jpg` | Confirm commercial-use licenses for both iStock images. If unavailable, swap for suitably licensed replacements before publishing. |
| **Founder name / title / bio** | `app/page.tsx` (About section), `app/about/page.tsx` | Replace all `[Founder Name]` / `[Founder Title]` / `[Short founder bio]` placeholders. Use verifiable info only. |
| **Founder photo** | `app/about/page.tsx`, `app/page.tsx` | Replace the "Photo"/icon placeholder with a real headshot. |
| **Founder LinkedIn URL** | About section + About page | Replace `href="#"` with the real profile URL. |
| **Resend setup** | Vercel env vars | Add `RESEND_API_KEY` etc. so the contact form delivers email in production. |
| **Analytics (optional)** | `app/privacy/page.tsx` | If you add analytics, name the provider in the Privacy Policy. |
| **Legal review** | `app/terms/page.tsx`, `app/privacy/page.tsx` | Have counsel review the Terms and Privacy Policy before launch. |
| **Social OG image** | `app/opengraph-image.tsx` | Auto-generated; customize if desired. |

---

## Credibility guardrails (by design)

This site deliberately avoids invented customers, testimonials, revenue stats,
integration partnerships, or security certifications. It uses language like
"building," "developing," "designed to," and "potential," and presents the product
dashboard as a clearly-labeled **concept**. Keep these guardrails when editing.
