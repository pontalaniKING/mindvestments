# Mindvestments

A static, multilingual content site built with Astro. No WordPress, no database, no CMS —
everything lives in this repo as files, so Git history doubles as the change log the evidence
policy requires.

## Languages

Four locales are wired into the routing: **English** and **Swedish** are fully translated and
have content. **Hindi** and **Arabic** have working routes, a language switcher entry, and
translated site chrome (navigation, buttons, footer) — but no articles yet. Visiting an
untranslated page in those languages shows an honest "not translated yet, read it in English"
notice instead of silently falling back.

Arabic renders right-to-left automatically (`dir="rtl"` is set from `src/i18n/config.ts`), and
the stylesheet uses logical CSS properties (`border-inline-start`, `padding-inline`, `inset-inline-start`)
throughout specifically so RTL did not need retrofitting later. Hindi and Arabic load their own
web fonts (Noto Serif/Sans Devanagari, Noto Naskh Arabic) since the Latin serif/sans pairing used
elsewhere doesn't cover those scripts.

Every URL is prefixed: `/en/`, `/sv/`, `/hi/`, `/ar/`. The root `/` redirects client-side based on
browser language, defaulting to English, with a plain link list for anyone without JS.

## Running it

You need Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Putting it on GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:YOURNAME/mindvestments.git
git push -u origin main
```

Then pick a host:

- **Vercel or Cloudflare Pages** (recommended): connect the repo, accept the detected Astro
  settings, point `mindvestments.com` at it.
- **GitHub Pages**: already wired up in `.github/workflows/deploy.yml`. Enable Pages in the repo
  settings with source set to GitHub Actions, and add a `public/CNAME` file containing
  `mindvestments.com` if you use the custom domain.

## Where everything is

```
src/
  i18n/
    config.ts               locales, default locale, RTL/font metadata, path() and
                             swapLocale() helpers. Add a fifth locale here.
    ui.ts                    the translation dictionary. t(locale, key) falls back to
                             English for any key a locale hasn't translated — nothing
                             ever renders blank.
    content.ts               parseId() / urlFor() — reads locale and pillar out of an
                             article's file path instead of duplicating them in frontmatter.

  data/site.ts               language-neutral data only: pillar ids, marker colours,
                             which pillars have content yet (livePillars).

  content.config.ts          the schema every article must satisfy.

  content/articles/<locale>/<pillar>/<slug>.mdx
                             one file per article per language. The locale comes from
                             the folder, so a Swedish article physically cannot end up
                             tagged as English.

  layouts/Base.astro         head, hreflang tags, locale-aware fonts, dir=rtl/ltr.
  components/                MindvestmentCard, ArticleCard, EvidenceBadge, Header
                             (contains the language switcher), Footer.

  pages/
    index.astro               root redirect by browser language
    404.astro                 locale-neutral, used for any genuinely unmatched path
    [locale]/index.astro      homepage
    [locale]/start.astro      the six-question router (en/sv only — see below)
    [locale]/evidence.astro
    [locale]/about.astro
    [locale]/contact.astro
    [locale]/[pillar]/index.astro
    [locale]/[pillar]/[slug].astro

  styles/global.css           all design tokens, logical properties for RTL,
                              per-script font overrides.
```

## Adding an article

Create `src/content/articles/en/sleep/your-slug.mdx` (swap `en` for the target locale). The URL
becomes `/en/sleep/your-slug`.

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
  - sleep/caffeine-and-sleep     # pillar/slug, resolved within the same locale
sources:
  - text: Title of the paper
    publisher: Journal name
    year: 2021
    url: https://...

featured: false                  # one article per locale can be the homepage hero
order: 1                         # lower sorts first
draft: false
---
```

**To translate an existing article**, create a file with the *same slug* under the new locale's
folder — `src/content/articles/sv/sleep/your-slug.mdx` — so `related` links resolve correctly in
both languages independently.

Then the body, in this order every time:

1. The answer, in two sentences. No warm-up, no anecdote.
2. `## Why this works`
3. `## How to do it` — numbered
4. `## Common mistakes`
5. `## What should change` — and roughly when
6. `## Your next step` — exactly one thing, never a list of ten

## Adding a language

1. Add it to `locales` and `localeMeta` in `src/i18n/config.ts` (set `dir: 'rtl'` if needed,
   `contentReady: false` until articles exist).
2. Add a translated entry to `ui` in `src/i18n/ui.ts` — even just the chrome strings (nav, footer,
   `notFound.*`) is enough for the site to work; anything untranslated falls back to English.
3. If the script needs a specific font, add it to the `needsX` checks and font `<link>` in
   `Base.astro`, and a `:root[lang='xx']` block in `global.css`.
4. Nothing in `astro.config.mjs` or the page templates needs to change — `getStaticPaths` reads
   `locales` directly, so every route generates automatically.

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
appears (cards, hub grids, the article page itself). Per the design direction: no stock photography
of people mid-stretch or generic wellness imagery — stills from your own video shoots are what this
site is built to use once they exist.

## Rules the site is built around

- Nothing is ever recommended to a new reader unless it is graded A or B.
- Every article carries a check date. Anything older than two years gets reviewed again.
- Every follow-along video has a page here; every practical page has a video when one is possible.
- No supplement affiliate links. Ever.
- A locale gap is shown honestly ("not translated yet") rather than silently served in the wrong
  language or left blank.

## Before launch

- [ ] Replace `site.author`, `site.email` and `site.youtube` in `src/data/site.ts`
- [ ] Write `/about` properly per locale and put a real photograph on it
- [ ] Point the newsletter form on the homepage at your email provider
- [ ] Replace `REPLACE_WITH_VIDEO_ID` in `yoga-before-bed.mdx` and `stiff-hips-stretch.mdx` (both locales)
- [ ] Add an OG image and reference it in `Base.astro`
- [ ] Write the Hindi and Arabic start-page quiz in `[locale]/start.astro` once ready
- [ ] Set up Plausible or Fathom, and nothing heavier
