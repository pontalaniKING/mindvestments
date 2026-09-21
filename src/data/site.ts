export const site = {
  name: 'Mindvestments',
  url: 'https://mindvestments.com',
  author: 'Mindvestments Editorial Team',
  youtube: 'https://youtube.com/@mindvestments',
  email: 'hello@mindvestments.com'
};

export type PillarId = 'sleep' | 'move' | 'fuel' | 'mind' | 'life';

/**
 * Language-neutral pillar data only — ids and marker colours. Names,
 * blurbs and intros are looked up per-locale from src/i18n/ui.ts using
 * these ids as keys (`pillar.${id}.blurb`, etc), so adding a locale never
 * means touching this file.
 */
export const pillarIds: PillarId[] = ['sleep', 'move', 'fuel', 'mind', 'life'];

// Which pillars have any published content yet, independent of language.
export const livePillars: PillarId[] = ['sleep', 'move', 'fuel', 'mind'];

export const evidenceGradeIds = ['A', 'B', 'C', 'D'] as const;
export type EvidenceGrade = (typeof evidenceGradeIds)[number];

/**
 * Primary navigation groups. This is a display-only layer on top of the
 * existing pillar URLs — /sleep, /move, /fuel, /mind still work exactly as
 * before, they're just presented to the reader under three umbrellas.
 * "Lifestyle" is where Sleep, Fuel and (once it has content) Life live.
 */
export interface NavCategory {
  id: string;
  label: string;
  href: string;
  pillars: PillarId[];
}

export const navCategories: NavCategory[] = [
  { id: 'body', label: 'Body', href: '/move', pillars: ['move'] },
  { id: 'mind', label: 'Mind', href: '/mind', pillars: ['mind'] },
  { id: 'lifestyle', label: 'Lifestyle', href: '/lifestyle', pillars: ['sleep', 'fuel', 'life'] }
];
