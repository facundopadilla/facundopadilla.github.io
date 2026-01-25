import { siteDataByLang } from "../data/site-data.js";
import { translations } from "../data/translations.js";

let currentLang = "es";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getData = () => siteDataByLang[currentLang];
const getTranslations = () => translations;
const getCurrentLang = () => currentLang;
const setCurrentLang = (lang) => {
  currentLang = lang;
};

export {
  getData,
  getTranslations,
  getCurrentLang,
  setCurrentLang,
  prefersReducedMotion
};
