
## Goal

Rewrite copy, hierarchy, SEO, and structured data across the public site so Dino reads as a character-led personal intelligence product (starting with mental wellbeing), not a generic free mental health app. Keep visual identity, illustrations, screenshots, routes, App Store links, hotlines, support, privacy, and existing functionality untouched.

## Scope

Files to edit:
- `src/pages/Index.tsx` — homepage rewrite (hero, new sections, trust strip, features, mission, partners band, final CTA, crisis moved lower)
- `src/pages/AppMarketing.tsx` — hero + feature cards + safety note rewrite, keep screenshots and App Store CTA
- `src/pages/Partners.tsx` — reposition hero and body around character + personal intelligence; keep Cal.com link and contact
- `src/pages/OurStory.tsx` — retell story around character → community → relationship → intelligence
- `index.html` — sitewide title/description, OG/Twitter tags, JSON-LD (drop `MobileApplication` `HealthApplication` framing sitewide; keep it only on `/app` page-level JSON-LD if needed for App Store, otherwise switch to `SoftwareApplication` with a neutral category)
- `src/components/SEO.tsx` — no structural change; per-page titles/descriptions updated by callers
- `src/components/Header.tsx` / `src/components/Footer.tsx` — only if nav/footer labels or taglines still read "mental wellness app"; keep all existing links (Support, Hotlines, Privacy, Copyright, etc.)
- Alt text: update image `alt` strings that currently describe Dino as "wellness app" to describe the illustration itself

Out of scope (untouched): hotlines page, privacy page, support page, copyright page, App Store URLs, Cal.com URL, support email, crisis hotline data, video/stories functionality, kindness letters, quiz, resources page routing.

## Homepage rewrite (`Index.tsx`)

Section order, top to bottom:

1. **Hero** — eyebrow "Personal intelligence with a face.", H1 "Dino gets to know you.", body as specced. Primary CTA = App Store button. Secondary CTA = "See how Dino works" link that scrolls to `#how-it-works`. Remove "Now on iOS · Free" and "gentle place to check in".
2. **Relationship & world** — "It feels like visiting someone." with existing Dino artwork + one or two existing app screenshots.
3. **Trust strip** — keep only verified: `358K+ community`, `37 countries`, plus qualitative: `Built around your baseline`, `Designed to know when to stay quiet`. Remove "100% free", "0 ads/trackers".
4. **Intelligence section** — "The intelligence lives underneath the warmth." with the list of signals (check-ins, journaling, sleep, movement, gratitude, recurring causes, what has helped) framed against the user's own baseline.
5. **How it works** (`id="how-it-works"`) — 3 steps: share naturally / connects patterns / brings context back.
6. **Restraint section** — "It also knows when to leave you alone."
7. **What Dino can do today** — shipped capabilities list. Small note that fuller predictive vision is rolling out.
8. **Capability cards** — 6 cards replacing current feature cards (Understand patterns, Remember what matters, Notice what changes, Know when to show up, Know when to stay quiet, Help in ways that fit).
9. **Why we made Dino** — replaces the mission/charity language.
10. **Partners/Investors band** — "Building personal intelligence people can actually feel." Keep Cal.com + `/partners` link.
11. **Crisis note** — moved down here (right before final CTA / footer), keeps link to `/hotlines`.
12. **Final CTA** — "Meet the intelligence that grows with you." App Store button; "Free" allowed only as small factual caption.

## App page (`AppMarketing.tsx`)

- Hero: eyebrow "Personal intelligence with a face.", H1 "A companion that learns you.", specced body. Keep App Store CTA and screenshot grid.
- Replace 5 wellness feature cards with 5 capability cards: Learns your patterns / Builds around your baseline / Remembers useful context / Reaches out with restraint / Brings the right tool at the right moment. Each card mentions the underlying tools (check-ins, journaling, gratitude, breathing, weekly insights, resources) inside the explanation.
- Safety note rewritten per spec.
- Keep support CTA block, Cal link only if already present (it isn't — leave it out).

## Partners page (`Partners.tsx`)

- Hero: "Building personal intelligence with a face." + specced body.
- Keep 4 inbound tracks, thesis block, contact CTA, Cal.com button, and support email. Rewrite thesis copy around the 7-beat story (faceless assistants → character → intelligence underneath → learns against baseline → restraint → mental wellbeing start → larger direction).
- Remove clinical/outcomes language. Traction stats: keep 358K+, 37 countries, iOS, 100% free (as factual, not headline).

## Our Story (`OurStory.tsx`)

- Keep visual layout (dashed arrows, staggered dinos, flower garden footer, `SEO`).
- Rewrite the 5 body sections + Mission + Vision to walk through: Dino as character → community connection → people already treated Dino as someone they knew → built a product around that relationship → world you visit → personal intelligence learning from you → mental wellbeing as start → future of personal intelligence that lives with you.
- Keep warm, human tone. Not pitch-y.

## SEO and structured data

- `index.html`:
  - Title: `Dino — Personal intelligence with a face`
  - Description: specced
  - Update `og:title`, `og:description`, `twitter:title`, `twitter:description` to match
  - Keep OG image, favicon, site verification, canonical
  - JSON-LD: keep Organization block. Replace `MobileApplication` + `HealthApplication` block with a neutral `SoftwareApplication` (no `HealthApplication` category) that keeps name, iOS, offers, downloadUrl. This avoids categorizing Dino primarily as medical.
- Per-page `<SEO>` calls: rewrite title/description on Index, AppMarketing, Partners, OurStory. On `/app`, drop `HealthApplication` from its inline JSON-LD too.

## Language rules enforcement

- No em dashes anywhere in new copy; use commas, periods, parentheses.
- Avoid banned words: revolutionary, cutting-edge, transformative AI, AI-powered wellness, second brain, your best self, self-care journey, empowering users, holistic wellness, engagement, retention, "mental health app", excessive "free".
- Use the specced anchor phrases where natural.

## Product truth guardrails

- Present pattern-based reaching out as live.
- Present predicting difficult days / night-before outreach / universal proactive support as "what Dino is building toward".
- Do not invent user counts, retention, outcomes, or accuracy.
- Only reference sleep and movement as signals if the app already exposes them; otherwise soften to "the signals you choose to share".

## Verification

- Run production build; fix any TS/lint/build errors.
- Spot-check homepage, `/app`, `/partners`, `/our-story` on the running dev server at desktop and mobile widths via a quick Playwright screenshot pass.
- Confirm all existing routes still resolve and App Store, Cal.com, hotlines, support links are intact.

## Non-goals

- No new illustrations, no new screenshots, no redesign of colors/typography/layout primitives.
- No changes to auth, DB, edge functions, or any backend surface.
- No changes to hotlines, privacy, copyright, support pages.
