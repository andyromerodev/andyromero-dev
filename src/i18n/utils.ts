import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * Route slugs differ between languages (e.g. /sobre-mi vs /en/about), so the
 * language switcher needs an explicit mapping rather than a plain prefix swap.
 */
const esToEnSlug: Record<string, string> = {
  '': '',
  'sobre-mi': 'about',
  proyectos: 'projects',
  habilidades: 'skills',
  contacto: 'contact',
};

const enToEsSlug: Record<string, string> = Object.fromEntries(Object.entries(esToEnSlug).map(([es, en]) => [en, es]));

/** Builds the equivalent path in the OTHER language, preserving the current page. `currentLang` is the language of `url`. */
export function getAlternatePath(url: URL, currentLang: Lang): string {
  const path = url.pathname.replace(/\/$/, '');

  if (currentLang === 'en') {
    // currently on /en/<slug> -> map to the Spanish slug
    const slug = path.replace(/^\/en\/?/, '');
    const esSlug = enToEsSlug[slug] ?? '';
    return esSlug === '' ? '/' : `/${esSlug}`;
  }

  // currently on es (no prefix) -> map to the English slug under /en
  const slug = path.replace(/^\//, '');
  const enSlug = esToEnSlug[slug] ?? '';
  return enSlug === '' ? '/en' : `/en/${enSlug}`;
}
