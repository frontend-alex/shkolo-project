export type Language = "en" | "fr" | "de";

export interface TranslationKeys {}

export interface Translations {
  [key: string]: TranslationKeys;
}

export const translations: Translations = {
  gb: {},
  fr: {},
};
