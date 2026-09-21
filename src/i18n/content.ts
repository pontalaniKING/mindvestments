import type { CollectionEntry } from 'astro:content';

/**
 * Article ids come from the loader as "<pillar>/<slug>"
 * (see content.config.ts). This is the one place that string gets parsed,
 * so nothing else in the codebase splits on '/' by hand.
 */
export function parseId(id: string) {
  const [pillar, slug] = id.split('/');
  return { pillar, slug };
}

export function urlFor(entry: CollectionEntry<'articles'>): string {
  const { slug } = parseId(entry.id);
  return `/${entry.data.pillar}/${slug}`;
}
