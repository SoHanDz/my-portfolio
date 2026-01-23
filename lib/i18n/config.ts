export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
};

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};