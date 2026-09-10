import type { Locale } from "@/data/types";
import { es } from "@/data/es";
import { en } from "@/data/en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

const dictionaries = { es, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

/** There is exactly one page per locale (home), so this is a literal lookup, not a generic slug mapper. */
export const homePath: Record<Locale, string> = {
  es: "/",
  en: "/en/",
};

/** Absolute alternate URLs for hreflang tags. */
export function getAlternateUrls(site: string) {
  const base = site.replace(/\/$/, "");
  return {
    es: `${base}${homePath.es}`,
    en: `${base}${homePath.en}`,
    "x-default": `${base}${homePath.es}`,
  } as const;
}
