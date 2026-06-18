"use client";
import { createI18nClient } from "next-international/client";
import en from "./en/en";
import fr from "./fr/fr";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => Promise.resolve({ default: en }),
  fr: () => Promise.resolve({ default: fr }),
});
