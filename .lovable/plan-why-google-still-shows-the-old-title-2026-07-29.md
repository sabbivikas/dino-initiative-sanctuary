# Why Google still shows the old title

The live site is already correct. Fetching https://dinoinitiative.com/ right now returns:

```text
<title>Dino — Personal intelligence for your everyday life</title>
```

The old "Free mental wellness companion app" title no longer exists anywhere on the site. What you see in Google is a cached snippet from the last time Google crawled the homepage. Nothing in the code can change that — Google refreshes it only on its next crawl. The AI Overview and the sitelinks (Our Story, Daily Quiz, ...) come from that same cached copy.

Note: the live page still has the em dash version of the title, which means the most recent punctuation cleanup has not been published yet.

## Plan

1. Publish the site so the latest metadata (the "Dino: Personal intelligence for your everyday life" cleanup) goes live.
2. Re-submit the sitemap to Google Search Console so the crawler is nudged to revisit all routes.
3. You then request indexing for the homepage in Search Console: URL Inspection > paste https://dinoinitiative.com/ > "Request indexing". This is the fastest way to force a re-crawl and it must be done from your Search Console account — the API cannot request indexing.

## Technical notes

- No source changes are needed for the title itself; it is already correct in `index.html`.
- Sitemap re-submission uses the Search Console connector already linked to this project (`/webmasters/v3/sites/.../sitemaps/...` PUT for `https://dinoinitiative.com/sitemap.xml`).
- Typical re-crawl turnaround after requesting indexing is a few hours to a few days; the AI Overview text can lag longer.
