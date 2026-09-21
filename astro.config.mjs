import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mindvestments.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  },
  // The dev-only toolbar's accessibility-audit overlay was injecting a
  // visible clone of the hero card's <a> tag into the live page during
  // `astro dev` (see report) — an artifact of development tooling, not
  // of the site's actual markup. It has zero effect on `astro build` /
  // `astro preview` output regardless, but disabling it here removes the
  // confusing dev-time visual entirely.
  devToolbar: { enabled: false }
});
