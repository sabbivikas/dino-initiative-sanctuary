## Add share button to each episode row

Add a small Share control on each episode row in `src/pages/DinoStories.tsx` that opens a popover with social share options.

### Behavior
- Share icon (lucide `Share2`) sits on the right side of each episode row, vertically centered.
- Clicking it does **not** trigger playback — uses `e.stopPropagation()` (and we'll restructure the row so the share button is a sibling of the play button, not nested inside it, since nested buttons are invalid HTML).
- Opens a small popover (shadcn `Popover`) with the platform options listed below.
- Shareable URL: `https://www.dinoinitiative.com/stories?ep=1` (deep link by episode id). We'll also read `?ep=` on page load and auto-open the player for that episode so shared links land directly on the video.

### Platforms
- **Copy link** → writes URL to clipboard via `navigator.clipboard.writeText`, shows a sonner toast "Link copied".
- **Twitter / X** → `https://twitter.com/intent/tweet?text=...&url=...` with episode title + tagline.
- **Facebook** → `https://www.facebook.com/sharer/sharer.php?u=...`.
- **Messages (SMS)** → `sms:?&body=<title> <url>` — works on mobile, harmless on desktop.
- **Instagram Stories** → IG has no public web-share URL, so we'll surface a "Copy link for Instagram" item that copies the URL and toasts "Link copied — paste into your Instagram story". On mobile devices that support `navigator.share`, we'll prefer the native share sheet for this item (lets users pick IG directly).

All external links open via `window.open(url, '_blank', 'noopener,noreferrer')`.

### Files touched
- `src/pages/DinoStories.tsx` — restructure row (play button + share button as siblings), add Popover with share options, add `?ep=` query-param handling on mount.

### Notes
- Styling stays within the existing minimal/editorial system (semantic tokens, sage accent, no new colors).
- No backend changes. No new dependencies — `Share2` from lucide and `Popover` from shadcn are already available.
- Open Graph meta tags for richer link previews on Twitter/Facebook are out of scope for this change; happy to follow up with that if you want nicer unfurls.