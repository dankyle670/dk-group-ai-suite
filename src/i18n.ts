import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import frCommon from "./locales/fr/common.json";

const supportedLngs = ["en", "fr"] as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: [...supportedLngs],
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    resources: {
      en: { common: enCommon },
      fr: { common: frCommon },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "dkgroup_lang",
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

i18n.on("languageChanged", (lng) => {
  // Keep <html lang="..."> correct for accessibility/SEO.
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
