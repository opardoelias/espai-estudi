import * as ca from './ca';
import * as es from './es';
import * as en from './en';

export const locales = ['ca', 'es', 'en'] as const;
export type Locale = (typeof locales)[number];

const dictionaries = { ca, es, en };

// Home URL per language; inner pages will add their own alternates.
export const homeHrefs: Record<Locale, string> = { ca: '/', es: '/es/', en: '/en/' };

export function getT(locale: string | undefined) {
  const lang: Locale = (locales as readonly string[]).includes(locale ?? '') ? (locale as Locale) : 'ca';
  return { lang, ...dictionaries[lang] };
}
