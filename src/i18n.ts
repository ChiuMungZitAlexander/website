import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      about: "about",
      blogs: "blogs",
      music: "music",
      more: "more",
      intro_1: "I'm Alexander ZHÀO",
      intro_2: "Web3 developer (Typescript/Rust)",
      intro_3: "Alto saxophinst",
      coming_soon: "coming soon",
    },
  },
  zh: {
    translation: {
      about: "关于",
      blogs: "博客",
      music: "音乐",
      more: "更多",
      intro_1: "我是 Alexander ZHÀO",
      intro_2: "Web3开发者 (Typescript/Rust)",
      intro_3: "中音萨克斯手",
      coming_soon: "即将上线",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs: ["en", "zh"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
