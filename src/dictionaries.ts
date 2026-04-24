import 'server-only';

const dictionaries: any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'pl' | 'de') => {
  if (!dictionaries[locale]) return dictionaries['en']();
  return dictionaries[locale]();
}
