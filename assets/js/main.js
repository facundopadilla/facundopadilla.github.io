import { getCurrentLang, getTranslations, prefersReducedMotion, setCurrentLang } from "./modules/state.js";
import { applyTranslations } from "./modules/i18n.js";
import {
  createHeroMarquee,
  createExperience,
  createEducation,
  createAchievements,
  createCommunities,
  createCommunityMetrics,
  createSkills,
  createContacts
} from "./modules/render.js";
import {
  setupAccordion,
  setupExperienceAccordion,
  setupTabs,
  setupAchievementsFilter,
  setupScrollSpy,
  setupNavDropdowns,
  setupBackToTop,
  setupSmoothScroll,
  setupSectionNav,
  setupCursorDot,
  setupAnimations
} from "./modules/setup.js";

const setupLanguageToggle = () => {
  const toggle = document.querySelector(".lang-toggle");
  if (!toggle) return;
  const translations = getTranslations();
  const saved = localStorage.getItem("site-lang");
  const initialLang = saved && translations[saved] ? saved : "es";
  setCurrentLang(initialLang);

  const updateToggle = () => {
    const currentLang = getCurrentLang();
    toggle.textContent = currentLang === "es" ? "EN" : "ES";
    toggle.setAttribute("data-lang", currentLang);
  };

  const rerender = () => {
    const currentLang = getCurrentLang();
    applyTranslations(currentLang);
    createHeroMarquee();
    createExperience();
    setupExperienceAccordion();
    createEducation();
    setupAccordion();
    createAchievements();
    createCommunities();
    createCommunityMetrics();
    createSkills(document.querySelector(".tab.active")?.dataset.skill || "all", { animate: false });
    createContacts();
    if (!prefersReducedMotion && window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  };

  toggle.addEventListener("click", () => {
    const nextLang = getCurrentLang() === "es" ? "en" : "es";
    setCurrentLang(nextLang);
    localStorage.setItem("site-lang", nextLang);
    updateToggle();
    rerender();
  });

  updateToggle();
  rerender();
};

setupLanguageToggle();
setupAccordion();
setupExperienceAccordion();
setupTabs();
setupAchievementsFilter();
setupScrollSpy();
setupNavDropdowns();
setupBackToTop();
setupSmoothScroll();
setupSectionNav();
setupCursorDot();
setupAnimations();
