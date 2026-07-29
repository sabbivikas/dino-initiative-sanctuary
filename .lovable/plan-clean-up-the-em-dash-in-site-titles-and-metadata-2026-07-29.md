# Clean up the em dash in site titles and metadata

The em dash ("—") in the site title and descriptions reads awkwardly in search results and browser tabs, and doesn't match the rest of the site's plainer voice. Replace it with simpler punctuation everywhere it appears in metadata.

## Changes

- `index.html`: title, og:title, twitter:title become "Dino: Personal intelligence for your everyday life".
- `index.html`: description, og:description, twitter:description, and the Organization JSON-LD description drop the em dash in favour of a comma or full stop.
- `src/components/SEO.tsx`: per-page title suffix changes from `"{title} — Dino Initiative"` to `"{title} | Dino Initiative"`, so every route's tab title and social title reads cleanly.
- `public/llms.txt`: leave as-is (no titles affected).

## Note

Google's search snippet still shows an older cached title. It updates on Google's next crawl; requesting indexing in Search Console speeds that up.

## Technical detail

Text-only edits to `index.html` head tags and the `fullTitle` template string in `src/components/SEO.tsx`. No component logic, routing, or backend changes.
