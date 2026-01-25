import { getCurrentLang, getTranslations, prefersReducedMotion } from "./state.js";
import { createAchievements, createSkills } from "./render.js";

const setupAccordion = () => {
  const container = document.getElementById("education-accordion");
  if (!container || container.dataset.bound === "true") return;
  container.dataset.bound = "true";

  const closeAll = () => {
    container.querySelectorAll(".accordion-panel").forEach((el) => {
      el.classList.remove("open");
      el.style.maxHeight = null;
    });
    container.querySelectorAll(".accordion-header").forEach((header) => {
      header.setAttribute("aria-expanded", "false");
      if (header.lastElementChild) {
        header.lastElementChild.textContent = "+";
      }
    });
  };

  container.addEventListener("click", (event) => {
    const btn = event.target.closest(".accordion-header");
    if (!btn || !container.contains(btn)) return;
    const panel = btn.nextElementSibling;
    if (!panel) return;
    const isOpen = panel.classList.contains("open");
    closeAll();
    if (!isOpen) {
      panel.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + "px";
      btn.setAttribute("aria-expanded", "true");
      if (btn.lastElementChild) {
        btn.lastElementChild.textContent = "−";
      }
    }
  });
};

const setupExperienceAccordion = () => {
  const container = document.getElementById("experience-timeline");
  if (!container || container.dataset.bound === "true") return;
  container.dataset.bound = "true";

  const closeAll = () => {
    container.querySelectorAll(".timeline-panel").forEach((el) => {
      el.classList.remove("open");
      el.style.maxHeight = null;
    });
    container.querySelectorAll(".timeline-header").forEach((header) => {
      header.setAttribute("aria-expanded", "false");
      header.querySelector(".timeline-toggle").textContent = "+";
    });
  };

  const openPanel = (btn, panel) => {
    panel.classList.add("open");
    panel.style.maxHeight = panel.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    btn.querySelector(".timeline-toggle").textContent = "−";
  };

  container.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    const item = event.target.closest(".timeline-item");
    if (!item) return;
    const header = item.querySelector(".timeline-header");
    const panel = item.querySelector(".timeline-panel");
    if (!header || !panel) return;
    const isOpen = panel.classList.contains("open");
    closeAll();
    if (!isOpen) {
      openPanel(header, panel);
    }
  });
};

const setupTabs = () => {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      createSkills(tab.dataset.skill, { animate: true });
    });
  });
};

const setupAchievementsFilter = () => {
  document.querySelectorAll(".chip-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip-filter").forEach((chip) => {
        chip.classList.remove("active");
        chip.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      createAchievements(btn.dataset.filter);
      if (!prefersReducedMotion && window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });
};

const setupScrollSpy = () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-menu a, .nav-dropdown-menu a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLinks = document.querySelectorAll(`.nav-menu a[href="#${entry.target.id}"], .nav-dropdown-menu a[href="#${entry.target.id}"]`);
          activeLinks.forEach((link) => link.classList.add("active"));
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupNavDropdowns = () => {
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  if (!dropdowns.length) return;
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  const closeNavMenu = () => {
    if (navMenu && navToggle) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        closeNavMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!mobileQuery.matches) return;
      const target = event.target;
      if (!navMenu.contains(target) && !navToggle.contains(target)) {
        closeNavMenu();
      }
    });
  }

  const closeAll = () => {
    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".nav-link");
      const menu = dropdown.querySelector(".nav-dropdown-menu");
      if (button && menu) {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".nav-link");
    const menu = dropdown.querySelector(".nav-dropdown-menu");
    if (!button || !menu) return;
    let closeTimeout;

    const openMenu = () => {
      clearTimeout(closeTimeout);
      closeAll();
      menu.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    };

    const scheduleClose = () => {
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }, 120);
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (mobileQuery.matches) {
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
          menu.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      } else {
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
          menu.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
        } else {
          openMenu();
        }
      }
    });

    dropdown.addEventListener("mouseenter", () => {
      if (!mobileQuery.matches) {
        openMenu();
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!mobileQuery.matches) {
        scheduleClose();
      }
    });

    menu.addEventListener("mouseenter", () => {
      if (!mobileQuery.matches) {
        clearTimeout(closeTimeout);
      }
    });

    menu.addEventListener("mouseleave", () => {
      if (!mobileQuery.matches) {
        scheduleClose();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeAll();
        closeNavMenu();
      });
    });
  });

  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
};

const setupBackToTop = () => {
  const button = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
};

const setupSectionNav = () => {
  const sections = Array.from(document.querySelectorAll("main section"));
  const upBtn = document.querySelector(".section-arrow[data-direction='up']");
  const downBtn = document.querySelector(".section-arrow[data-direction='down']");
  if (!sections.length || !upBtn || !downBtn) return;

  let currentIndex = 0;

  const updateButtons = () => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === sections.length - 1;
    upBtn.classList.toggle("hidden", isFirst);
    downBtn.classList.toggle("hidden", isLast);
    const translations = getTranslations();
    const currentLang = getCurrentLang();
    if (isLast) {
      downBtn.textContent = "↑";
      downBtn.setAttribute("aria-label", translations[currentLang].sectionNav.back);
    } else {
      downBtn.textContent = "↓";
      downBtn.setAttribute("aria-label", translations[currentLang].sectionNav.next);
    }
    upBtn.setAttribute("aria-label", translations[currentLang].sectionNav.prev);
  };

  const scrollToIndex = (index) => {
    const target = sections[index];
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    if (!prefersReducedMotion && window.gsap) {
      const panel = target.querySelector(".container");
      if (panel) {
        gsap.fromTo(
          panel,
          { opacity: 0.6, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.15 }
        );
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((section) => section.id === entry.target.id);
          if (index !== -1) {
            currentIndex = index;
            updateButtons();
          }
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  upBtn.addEventListener("click", () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  });

  downBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(currentIndex - 1);
    }
  });

  updateButtons();
};

const setupCursorDot = () => {
  const halo = document.querySelector(".cursor-halo");
  if (!halo || prefersReducedMotion) return;
  const update = (x, y) => {
    halo.style.setProperty("--cursor-x", `${x}px`);
    halo.style.setProperty("--cursor-y", `${y}px`);
  };

  update(window.innerWidth / 2, window.innerHeight / 2);

  window.addEventListener("pointermove", (event) => {
    update(event.clientX, event.clientY);
  });
};

const setupSmoothScroll = () => {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      if (targetId === "#top") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
        return;
      }
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    });
  });
};

const setupAnimations = () => {
  if (prefersReducedMotion || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-text > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  gsap.from(".hero-visual", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2
  });

  document.querySelectorAll(".section").forEach((section) => {
    const targets = section.querySelectorAll(".card, .timeline-item, .accordion-item, .chip");
    if (!targets.length) return;
    gsap.from(targets, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%"
      },
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out"
    });
  });

  const metrics = document.querySelectorAll(".metric-card strong[data-value]");
  metrics.forEach((metric) => {
    const value = Number(metric.dataset.value);
    if (!metric.dataset.value || Number.isNaN(value)) return;
    const counter = { val: 0 };
    ScrollTrigger.create({
      trigger: metric,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: value,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            metric.textContent = Math.floor(counter.val);
          }
        });
      }
    });
  });
};

export {
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
};
