type Dict = Record<string, string>;

/**
 * Flat, dot-notation dictionary for the site's one supported language.
 * Previously this was keyed per-locale (en/sv/hi/ar); now that the site
 * is English-only, the en dictionary's keys/values live at the top level.
 */
export const ui: Dict = {
    'site.tagline': 'Small things, compounded.',
    'site.description':
      'Practical ways to sleep better, move more and think more clearly — each one with a time cost, an expected return and an evidence grade.',

    'nav.startHere': 'Start here',
    'nav.pillar.sleep': 'Sleep',
    'nav.pillar.move': 'Move',
    'nav.pillar.fuel': 'Fuel',
    'nav.pillar.mind': 'Mind',
    'nav.pillar.life': 'Life',
    'nav.comingSoon': 'Coming soon',
    'nav.skipToContent': 'Skip to content',

    'pillar.sleep.blurb': 'The currency everything else is paid for.',
    'pillar.sleep.intro':
      'Sleep is the first place to look when your energy is gone, and it is the area where the evidence is strongest and the changes are quickest to feel. Start with the timing of your day, not with gadgets.',
    'pillar.move.blurb': 'Stretching, mobility, strength and walking.',
    'pillar.move.intro':
      'Movement you will actually repeat beats the perfect programme you abandon in week two. Short, specific, no equipment.',
    'pillar.fuel.blurb': 'Eating and drinking for steady energy.',
    'pillar.fuel.intro':
      'Fewer rules, better defaults. What you eat most days matters more than what you eat once.',
    'pillar.mind.blurb': 'Stress, focus, habits and mental recovery.',
    'pillar.mind.intro': 'Most of what is sold as motivation is really environment, sleep and attention.',
    'pillar.life.blurb': 'Routines, people, daylight and screens.',
    'pillar.life.intro': 'The conditions that decide whether any of the rest is even possible.',
    'pillar.empty':
      'Nothing published here yet. Sleep is being written first, because the evidence is strongest there and the change is quickest to feel.',
    'pillar.emptyLink': 'Start there',

    'category.body.label': 'Body',
    'category.body.blurb': 'Stretching, mobility, strength and walking — movement you will actually repeat.',
    'category.mind.label': 'Mind',
    'category.mind.blurb': 'Stress, focus, habits and mental recovery — the environment underneath motivation.',
    'category.lifestyle.label': 'Lifestyle',
    'category.lifestyle.blurb': 'Sleep, food and the daily rhythms everything else is paid for out of.',

    'evidence.A.label': 'Well established',
    'evidence.A.short': 'We are confident about this.',
    'evidence.A.long': 'Supported by multiple randomised trials or meta-analyses that broadly agree.',
    'evidence.B.label': 'Supported',
    'evidence.B.short': 'The evidence leans this way.',
    'evidence.B.long': 'Limited trials, or strong observational data plus a plausible mechanism.',
    'evidence.C.label': 'Uncertain',
    'evidence.C.short': 'Interesting, but we do not know yet.',
    'evidence.C.long': 'Early, small or conflicting studies. Treat as a hypothesis, not a fact.',
    'evidence.D.label': 'Practice-based',
    'evidence.D.short': 'No good research. Cheap to try.',
    'evidence.D.long':
      'Widely used and low risk, but not meaningfully studied. We say so rather than dress it up.',

    'card.kicker': 'One mindvestment',
    'card.costs': 'Costs',
    'card.perDay': 'min a day',
    'card.effort': 'Effort',
    'card.gives': 'Gives you',
    'card.felt': 'Felt after',
    'card.difficulty.Low': 'Low',
    'card.difficulty.Medium': 'Medium',
    'card.difficulty.High': 'High',

    'home.h1': 'Small things, compounded.',
    'home.lede':
      'Everything here is one specific action, with what it costs you, what it gives back, how long before you feel it, and how good the evidence actually is.',
    'home.ctaStart': 'Find where to start',
    'home.ctaSleep': 'Read about sleep',
    'home.note': 'Takes about a minute. No account, no email.',
    'home.complaintsHeading': 'What is bothering you right now?',
    'home.pillarsHeading': 'Three places to invest',
    'home.howHeading': 'How this works',
    'home.step1Title': 'Find your weakest area',
    'home.step1Body': 'Six questions. It points at one thing, not ten.',
    'home.step2Title': 'Make one small change',
    'home.step2Body': 'The smallest version that still counts. Five hours of sleep becomes six, not eight.',
    'home.step3Title': 'Give it two weeks',
    'home.step3Body':
      'Every page tells you what should change and roughly when. If nothing does, that one is not for you.',
    'home.watchHeading': 'Watch instead of read',
    'home.watchBody':
      'Every follow-along video has a page here with the written version, the common mistakes and what to do next.',
    'home.latestHeading': 'Recently published',
    'home.trustHeading': 'Why you can trust a page here',
    'home.trustBody':
      'Every recommendation carries a grade from A to D. An A means several trials agree. A D means there is no good research at all and we say so instead of dressing it up. Sources are primary research, every page carries the date it was last checked, and when we change our mind we write down why.',
    'home.trustLink': 'How the grading works',
    'home.newsHeading': 'One mindvestment a week',
    'home.newsBody': 'Two minutes to read. One thing to try. Nothing else.',
    'home.newsNote': 'Sign-up isn’t open yet — check back soon.',

    'complaint.tired': 'Always tired',
    'complaint.cantSleep': 'Can’t fall asleep',
    'complaint.wired': 'Wired at night',
    'complaint.stiff': 'Stiff from sitting',
    'complaint.noTime': 'No time at all',
    'complaint.dontKnow': 'Don’t know where to start',

    'article.readNext': 'Read next',
    'article.sources': 'Sources',
    'article.checked': 'Checked',
    'article.by': 'By',
    'article.reviewedBy': 'Reviewed by',
    'article.careNote': 'Before you try this.',
    'article.notReadyTitle': 'Not translated yet',
    'article.notReadyBody':
      'This article is not available in this language yet. You can read it in English in the meantime.',
    'article.notReadyLink': 'Read in English',

    'start.title': 'Start here',
    'start.description': 'Six questions, about a minute, no account. It points at one thing to change, not ten.',
    'start.h1': 'Where should you start?',
    'start.lede':
      'Six questions, about a minute. It points at one thing, and it will only ever point at something the evidence actually supports.',
    'start.questionOf': 'Question {n} of {total}',
    'start.firstMindvestment': 'Your first mindvestment',
    'start.readHow': 'Read how to do it',
    'start.again': 'Answer again',
    'start.notReadyTitle': 'Not translated yet',
    'start.notReadyBody': 'The guided quiz is not written in this language yet.',
    'start.notReadyLink': 'Try it in English',

    'evidence.title': 'How we grade evidence',
    'evidence.description':
      'Every recommendation carries a grade from A to D, and a D means there is no good research at all.',
    'evidence.h1': 'How we grade evidence',
    'evidence.lede':
      'Health writing usually presents everything with the same confidence, whether it rests on forty trials or on one podcast. Every recommendation here carries a grade instead.',
    'evidence.rulesHeading': 'The rules we hold ourselves to',
    'evidence.rule1': 'The first thing we ever recommend to someone new is graded A or B. Never C, never D.',
    'evidence.rule2': 'Sources are primary research, not other blogs.',
    'evidence.rule3':
      'Every page carries the date it was last checked. Anything older than two years gets reviewed again.',
    'evidence.rule4': 'When we change a recommendation, we write down what changed and why.',
    'evidence.rule5':
      'Nothing on this site is paid for by a brand, and no recommendation is ever chosen because it earns money.',
    'evidence.rule6':
      'Where a topic touches disordered eating, depression, self-harm, sleep apnoea or pregnancy, the page says so at the top and points to a clinician.',
    'evidence.changeMindHeading': 'What would change our mind',
    'evidence.changeMindBody':
      'On anything graded C, the page states what result would move it up or down. If that result arrives, the page changes and the change is logged.',
    'evidence.notMedicalHeading': 'This is not medical advice',
    'evidence.notMedicalBody':
      'It is general information written carefully. It cannot know your history, your medication or your diagnosis. Anything persistent or frightening belongs with a doctor.',

    'about.title': 'About',
    'about.description': 'Who writes this, and why it exists.',
    'about.photoPlaceholder': 'Your photo goes here',
    'about.photoCaption':
      'A real photograph matters more here than anywhere else on the site. Health writing without a face behind it does not get trusted, by readers or by search engines.',
    'about.h1': 'About',
    'about.lede':
      'Replace everything below with your own words. Keep it short, specific and free of claims you cannot back up.',
    'about.whyHeading': 'Why this exists',
    'about.whyBody':
      'Most people do not have an information problem. They have an ordering problem. They know forty things they should be doing, have energy for two, and pick the wrong two. Every page here is one action with a cost, a return and an honest grade on the evidence behind it.',
    'about.whoHeading': 'Who writes it',
    'about.whoBody':
      'Say who you are, what you actually know well, and what you do not. Being specific about the limits of your expertise is what makes the rest believable.',
    'about.fundedHeading': 'How it is funded',
    'about.fundedBody': 'State it plainly. If nothing earns money yet, say that. If that changes, say what changed.',
    'about.contactHeading': 'Get in touch',
    'about.contactBody': 'Corrections are welcome and get published.',

    'contact.title': 'Contact',
    'contact.description': 'Corrections, questions, or something that helped or did not work for you.',
    'contact.h1': 'Get in touch',
    'contact.lede':
      'Corrections are especially welcome, and get published as part of the evidence changelog when they change what a page says.',
    'contact.general': 'General',
    'contact.foundWrong': 'Found something wrong on a page',
    'contact.foundWrongBody': 'Say which page and what the source actually says — that is the fastest way to get it fixed.',

    'footer.topics': 'Topics',
    'footer.thisSite': 'This site',
    'footer.evidence': 'How we grade evidence',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.copyright': 'General information, not medical advice. Talk to a clinician about anything that concerns you.',

    'notFound.kicker': '404',
    'notFound.h1': 'That page moved or never existed.',
    'notFound.lede': 'Try one of the five pillars, or answer six quick questions and get pointed at the right place to start.',

    'video.newEpisodes': 'New follow-along videos every week'
};

/**
 * Look up a key, with simple {var} interpolation.
 */
export function t(key: string, vars?: Record<string, string | number>): string {
  const raw = ui[key] ?? key;
  if (!vars) return raw;
  return Object.entries(vars).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, String(v)), raw);
}
