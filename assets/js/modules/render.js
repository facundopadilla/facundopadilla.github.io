import { getCurrentLang, getData, getTranslations, prefersReducedMotion } from "./state.js";

let achievementsResizeBound = false;

const equalizeAchievementHeights = () => {
  const container = document.getElementById("achievements-grid");
  if (!container) {
    return;
  }
  const cards = Array.from(container.querySelectorAll(".achievement-card"));
  if (!cards.length) {
    return;
  }
  const images = Array.from(container.querySelectorAll(".achievement-image"));
  const waitForImages = images.map((img) => (
    img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      })
  ));

  Promise.all(waitForImages).then(() => {
    requestAnimationFrame(() => {
      cards.forEach((card) => {
        card.style.height = "auto";
      });
      const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    });
  });
};

const createExperience = () => {
  const siteData = getData();
  const container = document.getElementById("experience-timeline");
  container.innerHTML = siteData.experience
    .map((item, index) => {
      const link = item.link ? `<a class="inline-link" href="${item.link}" target="_blank" rel="noreferrer">${item.link}</a>` : "";
      const extra = item.extraLink
        ? `<a class="inline-link" href="${item.extraLink}" target="_blank" rel="noreferrer">${item.extraLink}</a>`
        : "";
      const openClass = index === 0 ? " open" : "";
      const expanded = index === 0 ? "true" : "false";
      const maxHeight = index === 0 ? "style=\"max-height: 600px;\"" : "";
      return `
        <article class="card timeline-item">
          <button class="timeline-header" type="button" aria-expanded="${expanded}" data-index="${index}">
            <div class="timeline-header-text">
              <h3>${item.company}</h3>
              <small>${item.dates}</small>
              <p>${item.role}</p>
              ${link}
              ${extra}
            </div>
            <span class="timeline-toggle">${index === 0 ? "−" : "+"}</span>
          </button>
          <div class="timeline-panel${openClass}" ${maxHeight}>
            <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
          </div>
        </article>
      `;
    })
    .join("");
};

const createEducation = () => {
  const siteData = getData();
  const translations = getTranslations();
  const currentLang = getCurrentLang();
  const container = document.getElementById("education-accordion");
  container.innerHTML = siteData.education
    .map((section, index) => {
      const listItems = section.items
        .map((item) => {
          const listBullets = item.bullets
            ? `<ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
            : "";
          const note = item.note ? `<p class=\"note\">${item.note}</p>` : "";
          const link = item.link
            ? `<a class="inline-link" href="${item.link}" target="_blank" rel="noreferrer">${translations[currentLang].education.certificate}</a>`
            : "";
          const iconKey = (item.title || "").toLowerCase();
          const iconLabel =
            iconKey.includes("platzi") ? "platzi" :
            iconKey.includes("scrum foundation") || iconKey.includes("sfpc") ? "certiprof" :
            iconKey.includes("blockchain") || iconKey.includes("ubp") ? "ubp" :
            iconKey.includes("udemy") ? "udemy" :
            iconKey.includes("google") ? "google" :
            iconKey.includes("bbva") ? "bbva" :
            iconKey.includes("arquitectura") ? "platzi" :
            iconKey.includes("docker") ? "udemy" :
            iconKey.includes("cloud") ? "google" :
            iconKey.includes("sonarqube") ? "udemy" :
            iconKey.includes("scrum") ? "platzi" :
            "";
          const icon = iconLabel
            ? `<span class="edu-icon" aria-hidden="true"><img src="assets/images/education/${iconLabel}.png" alt="" /></span>`
            : `<span class="edu-icon" aria-hidden="true"></span>`;
          return `
            <li>
              <div class="edu-item">
                <div class="edu-content">
                  <h4 class="edu-title">${item.title} <small>${item.date || ""}</small></h4>
                  ${note}
                  ${listBullets}
                  ${link}
                </div>
                ${icon}
              </div>
            </li>
          `;
        })
        .join("");
      return `
        <div class="accordion-item">
          <button class="accordion-header" type="button" aria-expanded="${index === 0}" data-index="${index}">
            <span>${section.category}</span>
            <span>${index === 0 ? "−" : "+"}</span>
          </button>
          <div class="accordion-panel${index === 0 ? " open" : ""}" ${index === 0 ? "style=\"max-height: 600px;\"" : ""}>
            <ul>${listItems}</ul>
          </div>
        </div>
      `;
    })
    .join("");
};

const createAchievements = (filter = "all") => {
  const siteData = getData();
  const translations = getTranslations();
  const currentLang = getCurrentLang();
  const container = document.getElementById("achievements-grid");
  const items = filter === "all"
    ? siteData.achievements
    : siteData.achievements.filter((item) => {
      const categories = Array.isArray(item.category)
        ? item.category
        : item.category
          ? [item.category]
          : [];
      return categories.includes(filter);
    });

  const shouldMarquee = items.length >= 3;
  const renderedItems = shouldMarquee ? items.concat(items) : items;
  const carouselClass = shouldMarquee ? "achievements-carousel" : "achievements-carousel no-marquee";

  container.innerHTML = `
    <div class="${carouselClass}">
      <div class="achievements-track">
        ${renderedItems
          .map((item) => {
            const image = item.image
              ? `<img src="assets/images/${item.image}" alt="" class="achievement-image" />`
              : "";
            const button = item.link
              ? `<a class="btn ghost" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || translations[currentLang].communities.linkLabel}</a>`
              : "";
            return `
              <article class="card hoverable achievement-card">
                ${image}
                <div class="achievement-body">
                  <h3>${item.title}</h3>
                  <p><strong>${item.organization || ""}</strong></p>
                  <small>${item.date || ""}</small>
                  <p>${item.description}</p>
                  ${button}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  equalizeAchievementHeights();
  if (!achievementsResizeBound) {
    achievementsResizeBound = true;
    window.addEventListener("resize", equalizeAchievementHeights, { passive: true });
  }
};

const createCommunities = () => {
  const siteData = getData();
  const translations = getTranslations();
  const currentLang = getCurrentLang();
  const container = document.getElementById("communities-grid");
  container.innerHTML = siteData.communities
    .map((community) => {
      const link = community.link
        ? `<a class="btn ghost" href="${community.link}" target="_blank" rel="noreferrer">${translations[currentLang].communities.linkLabel}</a>`
        : "";
      const icon = community.icon
        ? `<span class="community-icon" aria-hidden="true"><img src="assets/images/${community.icon}" alt="" /></span>`
        : `<span class="community-icon" aria-hidden="true"></span>`;
      return `
        <article class="card hoverable community-item">
          <div class="community-content">
            <h3>${community.name} — ${community.role}</h3>
            <p>${community.description}</p>
          </div>
          <div class="community-actions">
            ${icon}
            ${link}
          </div>
        </article>
      `;
    })
    .join("");
};

const createCommunityMetrics = () => {
  const siteData = getData();
  const translations = getTranslations();
  const currentLang = getCurrentLang();
  const labels = translations[currentLang].communities.metrics;
  const metrics = [
    { key: "members", label: labels.members },
    { key: "events", label: labels.events },
    { key: "workshops", label: labels.workshops },
    { key: "sponsors", label: labels.sponsors }
  ];
  const container = document.getElementById("community-metrics");
  container.innerHTML = metrics
    .map((metric) => {
      const value = siteData.communityMetrics[metric.key];
      const display = typeof value === "number" ? `+${value}` : "—";
      const disabled = typeof value === "number" ? "" : "disabled";
      const dataValue = typeof value === "number" ? `data-value=\"${value}\"` : "";
      return `
        <div class="metric-card ${disabled}" data-metric="${metric.key}">
          <strong ${dataValue}>${display}</strong>
          <span>${metric.label}</span>
        </div>
      `;
    })
    .join("");
};

const interleaveSkills = (hardSkills, softSkills) => {
  const mixed = [];
  const max = Math.max(hardSkills.length, softSkills.length);
  for (let i = 0; i < max; i += 1) {
    if (hardSkills[i]) mixed.push(hardSkills[i]);
    if (softSkills[i]) mixed.push(softSkills[i]);
  }
  return mixed;
};

const buildSkillItems = (siteData) => {
  const hard = siteData.skills.hard.map((skill, index) => ({
    id: `hard:${skill}`,
    label: skill,
    type: "hard",
    index
  }));
  const soft = siteData.skills.soft.map((skill, index) => ({
    id: `soft:${skill}`,
    label: skill,
    type: "soft",
    index
  }));
  return { hard, soft };
};

const buildOrderIds = (activeType, hardItems, softItems) => {
  if (activeType === "hard") {
    return hardItems.concat(softItems).map((item) => item.id);
  }
  if (activeType === "soft") {
    return softItems.concat(hardItems).map((item) => item.id);
  }
  const mixed = interleaveSkills(hardItems, softItems);
  return mixed.map((item) => item.id);
};

const ensureSkillChips = (container, baseOrder) => {
  const existing = Array.from(container.querySelectorAll(".chip"));
  const existingIds = existing.map((chip) => chip.dataset.skillId);
  const baseIds = baseOrder.map((item) => item.id);
  const isSame = existingIds.length === baseIds.length && baseIds.every((id, index) => id === existingIds[index]);

  if (existing.length && isSame) {
    return;
  }

  container.innerHTML = "";
  baseOrder.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.dataset.skillType = item.type;
    chip.dataset.skillId = item.id;
    chip.textContent = item.label;
    container.appendChild(chip);
  });
};

const applySkillClasses = (container, activeType) => {
  const isAll = activeType === "all";
  container.querySelectorAll(".chip").forEach((chip) => {
    const isActive = isAll || chip.dataset.skillType === activeType;
    chip.classList.toggle("chip-active", isActive);
    chip.classList.toggle("chip-inactive", !isActive);
    chip.classList.toggle("chip-blurred", !isAll && !isActive);
  });
};

const animateSkillReorder = (container, orderIds) => {
  const chips = Array.from(container.querySelectorAll(".chip"));
  const first = new Map();
  chips.forEach((chip) => {
    first.set(chip.dataset.skillId, chip.getBoundingClientRect());
  });

  const map = new Map(chips.map((chip) => [chip.dataset.skillId, chip]));
  orderIds.forEach((id) => {
    const chip = map.get(id);
    if (chip) container.appendChild(chip);
  });

  const last = new Map();
  chips.forEach((chip) => {
    last.set(chip.dataset.skillId, chip.getBoundingClientRect());
  });

  if (prefersReducedMotion) return;

  chips.forEach((chip) => {
    const id = chip.dataset.skillId;
    const firstRect = first.get(id);
    const lastRect = last.get(id);
    if (!firstRect || !lastRect) return;
    const dx = firstRect.left - lastRect.left;
    const dy = firstRect.top - lastRect.top;
    if (!dx && !dy) return;
    chip.style.transform = `translate(${dx}px, ${dy}px)`;
    chip.style.transition = "transform 320ms ease";
    requestAnimationFrame(() => {
      chip.style.transform = "";
    });
    chip.addEventListener(
      "transitionend",
      () => {
        chip.style.transition = "";
      },
      { once: true }
    );
  });
};

const createSkills = (activeType = "all", options = {}) => {
  const { animate = false } = options;
  const siteData = getData();
  const container = document.getElementById("skills-chips");
  if (!container) return;
  const { hard, soft } = buildSkillItems(siteData);
  const mixed = interleaveSkills(hard, soft);
  const baseOrder = mixed;

  ensureSkillChips(container, baseOrder);
  const orderIds = buildOrderIds(activeType, hard, soft);
  if (animate) {
    animateSkillReorder(container, orderIds);
  } else {
    const map = new Map(Array.from(container.querySelectorAll(".chip")).map((chip) => [chip.dataset.skillId, chip]));
    orderIds.forEach((id) => {
      const chip = map.get(id);
      if (chip) container.appendChild(chip);
    });
  }
  applySkillClasses(container, activeType);
};

const createContacts = () => {
  const siteData = getData();
  const container = document.getElementById("contact-links");
  container.innerHTML = siteData.contacts
    .map((contact) => {
      const key = (contact.label || "").toLowerCase();
      const iconName =
        key.includes("linkedin") ? "linkedin" :
        key.includes("github") ? "github" :
        key.includes("email") ? "email" :
        "";
      return `
        <a class="contact-item" href="${contact.link}" target="_blank" rel="noreferrer">
          <span class="contact-icon" aria-hidden="true">
            ${iconName ? `<img src="assets/images/icons/${iconName}.png" alt="" />` : ""}
          </span>
          <span class="contact-label">${contact.label}</span>
        </a>
      `;
    })
    .join("");
};

const createHeroMarquee = () => {
  const container = document.getElementById("hero-marquee");
  if (!container) return;
  const siteData = getData();
  const items = siteData.skills.hard;
  const duplicated = items.concat(items);
  container.innerHTML = duplicated.map((item) => `<span class="marquee-item">${item}</span>`).join("");
};

export {
  createExperience,
  createEducation,
  createAchievements,
  createCommunities,
  createCommunityMetrics,
  createSkills,
  createContacts,
  createHeroMarquee,
  equalizeAchievementHeights
};
