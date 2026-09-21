import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  // Files live at src/content/articles/en/<pillar>/<slug>.mdx.
  // The entry id ends up as "<pillar>/<slug>" — pillar is read from that
  // path rather than duplicated in frontmatter, so a file can never
  // disagree with its own folder. English-only: the loader base points
  // directly at the en/ subfolder, which excludes the archived
  // Swedish content that still sits alongside it in src/content/articles/sv/.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum(['sleep', 'move', 'fuel', 'mind', 'life']),
    cluster: z.string(),

    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Mindvestments Editorial Team'),
    reviewedBy: z.string().optional(),

    action: z.string(),
    minutes: z.number().optional(),
    difficulty: z.enum(['Low', 'Medium', 'High']).default('Low'),
    payoff: z.string(),
    timeToEffect: z.string(),
    evidence: z.enum(['A', 'B', 'C', 'D']),

    video: z
      .object({
        id: z.string(),
        title: z.string(),
        duration: z.string()
      })
      .optional(),

    // ids like "sleep/morning-light", resolved against the collection at
    // render time.
    related: z.array(z.string()).default([]),

    sources: z
      .array(
        z.object({
          text: z.string(),
          url: z.string().url().optional(),
          publisher: z.string().optional(),
          year: z.number().optional()
        })
      )
      .default([]),

    careNote: z.string().optional(),

    // Optional real photo. Omit entirely until you have one — every
    // component falls back to an on-brand abstract placeholder rather
    // than a broken image or a generic stock-photo box.
    image: z
      .object({
        src: z.string(),   // e.g. "/images/sleep/morning-light.jpg"
        alt: z.string()
      })
      .optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles };
