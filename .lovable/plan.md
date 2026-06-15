# Make Dino Initiative business-ready

Goal: turn the site into a polished **App marketing site** that drives App Store installs, signals trust, and looks professional — in one coordinated pass. Keeps the existing minimal-editorial brand (black on white, sage accent, Dino Initiative font, hand-drawn dinos) and the existing features (Quiz, Kindness, Stories, Hotlines).

> I couldn't auto-transcribe your video. The plan below covers the common feedback we usually see on sites at this stage (homepage doesn't sell the app, weak social previews, missing trust signals, thin marketing page). If the video raised a specific issue not covered here, tell me and I'll fold it in before we build.

---

## 1. Homepage rebuilt as the marketing landing (`/`)

Today `/` is a generic "gentle place to check in" card with a small App Store banner buried below the fold. We rebuild it as a real app-marketing landing while keeping the brand voice:

- **Above-the-fold hero**: product name + one-line value prop + primary App Store badge (+ secondary "See features" anchor). Phone mockup using existing `app-screen-01.png` on the right (stacks on mobile).
- **Social proof strip**: "Featured by / loved by" — leave a placeholder slot if you don't have press yet, or swap in App Store rating once available.
- **Feature highlights** (3–5 cards): pulled from current `AppMarketing.tsx` (Check-Ins, Gratitude Jar, Breathing, Affirmations, Resources).
- **Screenshot gallery**: the 6 existing `app-screen-0*.png` in a horizontal scroll / responsive grid.
- **"Why Dino" / mission**: 2–3 sentences with the existing values copy, paired with `dino-comfort` illustration.
- **Crisis note**: keep the existing bordered card linking to `/hotlines` (mandatory disclaimer stays).
- **Final CTA band**: large App Store button + "Free • iOS" microcopy.

`/app` becomes a redirect to `/` (or a more detailed feature deep-dive — your call).

## 2. Trust, legal & professional polish

- **Footer rebuild**: 3-column layout — Product (App, Stories, Quiz, Kindness), Support (Resources, Hotlines, Support, Contact), Org (Our Story, Get Involved, Privacy, Copyright). Add tagline + small logo + © line + "Made with care" note.
- **Header**: collapse nav into Product / Resources / About groupings with hover dropdowns on desktop (current 7-link flat nav is crowded); keep the red "Get help now" CTA prominent. Mobile menu stays a sheet.
- **Contact / press email** surfaced on Support page (already exists: `Dinoinitiativesupport@gmail.com`) + add a "Press kit" section with logo download + 1-paragraph boilerplate.
- **Disclaimer banner**: keep the mandatory "Dino Initiative does not provide medical advice" as a thin always-visible line above footer.
- **404 page**: brand-aligned, links back home + to hotlines.

## 3. Conversion & SEO

- **`index.html` head cleanup**:
  - Real `<title>`: `Dino Initiative — Free mental wellness companion app`
  - Cleaner `meta description` (currently truncated mid-sentence)
  - `author` → "Dino Initiative" (currently "Lovable")
  - Add `<link rel="canonical" href="https://dinoinitiative.com/">`
  - Fix OG/Twitter image (currently a Lovable-hosted social asset) → generate a branded 1200×630 social card with logo + tagline + dino, store via `lovable-assets`
  - Add Organization JSON-LD (name, url, logo, sameAs)
  - Add MobileApplication JSON-LD pointing to the App Store URL
  - Replace `twitter:site @Lovable` with brand handle (or remove)
- **Per-route titles/descriptions** via `react-helmet-async` for `/`, `/app`, `/resources`, `/hotlines`, `/our-story`, `/quiz`, `/kindness`, `/stories`, `/support`, `/privacy`.
- **`public/sitemap.xml`**: regenerate to cover every public route at `https://dinoinitiative.com`.
- **`public/robots.txt`**: add `Sitemap:` directive; keep `Disallow` for `/admin/*`.
- **Favicon / app icons**: confirm a 32, 180 (apple-touch), and 512 icon are wired in `<head>` using the dino logo.
- **App Store deep-link tracking**: append a UTM (`?pt=...&ct=website&mt=8`) to every App Store link for attribution in App Store Connect.
- **Performance pass**: lazy-load below-fold images, set explicit `width`/`height` on hero, preload hero screenshot + logo, ensure no oversized PNGs (convert big screens to webp via `lovable-assets` if needed).
- **Accessibility**: alt text audit, focus rings, color-contrast check on sage accent against white, semantic landmarks.

## 4. Brand & visual polish

- Keep the existing design tokens (sage `--primary`, Dino Initiative font, large editorial scale). No restyle of the system — only consistency fixes:
  - Unify button/card radii (mix of `rounded-md`, `rounded-2xl`, `rounded-3xl` today).
  - Standardize section spacing (use a single `<Section>` wrapper).
  - Add a subtle, brand-correct hero background (paper-grain or hand-drawn floral motif using existing flower assets) — no gradients, no AI-default purple.
  - Slight micro-interactions on App Store badges and feature cards (existing swing/float patterns).

## 5. What we are NOT doing

- No new backend, auth, accounts, dashboards, or B2B features.
- No restyle of the Quiz / Kindness / Stories / Hotlines pages (only header/footer changes touch them).
- No video / pricing / blog scaffolding unless you ask.
- No copy changes to the medical disclaimer.

---

## Technical details

- **New/edited files (frontend only)**:
  - `index.html` — head meta cleanup, JSON-LD, canonical, fixed OG/Twitter image
  - `src/main.tsx` — wrap in `HelmetProvider`
  - `src/pages/Index.tsx` — full marketing rebuild
  - `src/pages/AppMarketing.tsx` — either becomes a deeper "Features" page or redirects to `/`
  - `src/components/Header.tsx` — grouped nav
  - `src/components/Footer.tsx` — 3-column rebuild
  - `src/components/SEO.tsx` (new) — per-route `<Helmet>` helper
  - `src/components/Section.tsx` (new) — standardized spacing wrapper
  - Per-page Helmet usage in `/resources`, `/hotlines`, `/our-story`, `/quiz`, `/kindness`, `/stories`, `/support`, `/privacy`, `/app`
  - `public/robots.txt`, `public/sitemap.xml` (or `scripts/generate-sitemap.ts`)
  - Generated branded social card → `src/assets/social-card.jpg.asset.json`
- **Dependencies**: add `react-helmet-async`.
- **No DB / edge-function changes.**
- **Verification**: build, run Playwright on `/`, `/app`, `/hotlines` at desktop + mobile viewports, screenshot, confirm head tags via DOM inspection.

After you approve, I'll implement everything in one pass. Reply with the video's key points if there's anything specific to fold in first.
