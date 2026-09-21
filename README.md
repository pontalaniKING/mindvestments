# Mindvestments

A static, English-only content site built with Astro. No WordPress, no database, no CMS —
everything lives in this repo as files, so Git history doubles as the change log the evidence
policy requires.

## Language

The site is English-only. Earlier work wired up multilingual routing (Swedish, Hindi, Arabic),
but that has been rolled back for launch:

- The article content collection (`src/content.config.ts`) loads only from
  `src/content/articles/en/` — content under `sv/` (and any other locale folder still present on
  disk) is archived and excluded from the build.
- Live pages are English routes with no locale prefix (`/`, `/sleep`, `/sleep/some-slug`, etc.).
- `src/i18n/ui.ts` is a flat, single-language translation dictionary (`t(key, vars?)`), and
  `src/i18n/content.ts` provides `parseId()` / `urlFor()` for turning an article's collection id
  into its URL.
- Some pre-English-only files (a `src/pages/[locale]/` directory and `src/i18n/config.ts`) still
  exist on disk as legacy leftovers from the old routing. They are not part of the current build
  or navigation and are pending cleanup — do not extend them.

## Running it

You need Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site locally
npm run check    # astro check (TypeScript/template diagnostics)
```

## Deployment

Production is deployed to **Cloudflare Pages**, building from the **`main`** branch.

A GitHub Actions workflow to GitHub Pages also exists at `.github/workflows/deploy.yml`. It is not
the active production deployment — Cloudflare Pages is.

## Where everything is

```
src/
  i18n/
    ui.ts                    the (English-only) translation dictionary. t(key, vars?) looks up
                             a flat key, with simple {var} interpolation.
    content.ts                parseId() / urlFor() — reads pillar/slug out of an article's
                             collection id and builds its URL.

  data/site.ts                sitewide brand constants (name, url, author, email, youtube) and
                             language-neutral pillar/nav data.

  content.config.ts           the schema every article must satisfy; loader points at
                             src/content/articles/en only.

  content/articles/en/<pillar>/<slug>.mdx
                             one file per article. Pillar comes from the folder, so a file
                             physically cannot end up tagged with the wrong pillar.

  layouts/Base.astro          document head: title/description, canonical URL, Open Graph and
                             Twitter meta, sitewide Organization/WebSite JSON-LD, fonts.
  components/                 MindvestmentCard, ArticleCard, ArticleArt, EvidenceBadge,
                             VideoEmbed, Header, Footer.

  pages/
    index.astro                homepage
    404.astro
    start.astro                the six-question router
    evidence.astro
    about.astro
    contact.astro
    search.astro               static, compile-time search index, plain-substring match
    lifestyle.astro            Sleep/Fuel/Life hub grouping
    [pillar]/index.astro
    [pillar]/[slug].astro

  styles/global.css            all design tokens and shared component styles.
```

## Adding an article

Create `src/content/articles/en/sleep/your-slug.mdx`. The URL becomes `/sleep/your-slug`.

```yaml
---
title: Ten minutes of daylight in the morning
description: One sentence. Shows up on cards and as the meta description.
pillar: sleep
cluster: Timing and light        # groups articles on the hub page
published: 2026-01-15
updated: 2026-01-20              # optional
author: Your Name
reviewedBy: Dr Someone, MD       # optional

action: Get ten minutes of outdoor daylight within half an hour of waking
minutes: 10
difficulty: Low                  # Low | Medium | High
payoff: Falling asleep earlier, steadier afternoon energy
timeToEffect: 1–2 weeks
evidence: A                      # A | B | C | D

video:                           # optional
  id: dQw4w9WgXcQ
  title: 10 Minute Bedtime Stretch
  duration: 10 min

careNote: Shown as a warning block at the top. Use it for real red flags.
related:
  - sleep/caffeine-and-sleep     # pillar/slug
sources:
  - text: Title of the paper
    publisher: Journal name
    year: 2021
    url: https://...

featured: false                  # one article can be the homepage hero
order: 1                         # lower sorts first
draft: false
---
```

Then the body, in this order every time:

1. The answer, in two sentences. No warm-up, no anecdote.
2. `## Why this works`
3. `## How to do it` — numbered
4. `## Common mistakes`
5. `## What should change` — and roughly when
6. `## Your next step` — exactly one thing, never a list of ten

## Images

Articles don't need a photo to look finished. Every card and every article page shows an on-brand
abstract placeholder — thin arcs tinted in the pillar's colour — generated from the article's slug,
so nothing looks broken and no two articles in a grid look identical.

To add a real photo later, add this to the article's frontmatter:

```yaml
image:
  src: /images/sleep/morning-light.jpg   # place the file in public/images/...
  alt: A short, real description of the photo
```

Nothing else needs to change — the placeholder is replaced automatically everywhere that article
appears (cards, hub grids, the article page itself, and the page's Open Graph/Twitter/JSON-LD
image).

## Rules the site is built around

- Nothing is ever recommended to a new reader unless it is graded A or B.
- Every article carries a check date. Anything older than two years gets reviewed again.
- Every follow-along video has a page here; every practical page has a video when one is possible.
- No supplement affiliate links. Ever.

## Before launch

- [ ] Point the newsletter section on the homepage at an actual email provider (currently
      "Sign-up isn't open yet")
- [ ] Write `/about` properly and add a real photograph (currently a placeholder)
- [ ] Connect the `mindvestments.com` domain
- [ ] Resolve the Cloudflare Pages build configuration so it builds and serves this Astro project
- [ ] Decide whether to keep or remove the GitHub Pages workflow and the legacy `[locale]`/
      `src/i18n/config.ts`/non-English content folders
