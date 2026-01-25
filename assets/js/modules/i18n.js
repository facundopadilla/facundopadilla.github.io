import { getTranslations } from "./state.js";

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  const translations = getTranslations();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach((key) => {
      value = value ? value[key] : undefined;
    });
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const keys = el.dataset.i18nHtml.split(".");
    let value = translations[lang];
    keys.forEach((key) => {
      value = value ? value[key] : undefined;
    });
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });
};

export { applyTranslations };
