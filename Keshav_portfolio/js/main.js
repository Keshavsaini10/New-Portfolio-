/**
 * Keshav Saini - Modern Premium Developer Portfolio
 * Main Interactive Logic & Features
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure PORTFOLIO_DATA is available
  const data = window.PORTFOLIO_DATA || {};

  // Initialize all subsystems
  initCursorGlow();
  initScrollProgress();
  initNavbar();
  initHeroTilt();
  initStats();
  initSkills();
  initTimeline();
  initProjects();
  initServices();
  initCertifications();
  initResumeModal();
  initContactForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. CURSOR SPOTLIGHT GLOW
   -------------------------------------------------------------------------- */
function initCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow || window.innerWidth < 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function update() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* --------------------------------------------------------------------------
   2. SCROLL PROGRESS BAR & NAVBAR ELEVATION
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.querySelector(".scroll-progress");
  const navContainer = document.querySelector(".nav-container");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (navContainer) {
      if (scrollTop > 50) {
        navContainer.classList.add("nav-scrolled");
      } else {
        navContainer.classList.remove("nav-scrolled");
      }
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. NAVBAR & MOBILE DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initNavbar() {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const drawerOverlay = document.querySelector(".drawer-overlay");
  const drawerClose = document.querySelector(".drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const navLinks = document.querySelectorAll(".nav-link");

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (drawerOverlay) drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Active section indicator on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 140;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. 3D HERO AVATAR TILT EFFECT
   -------------------------------------------------------------------------- */
function initHeroTilt() {
  const showcase = document.querySelector(".avatar-showcase");
  if (!showcase || window.innerWidth < 1024) return;

  const frame = showcase.querySelector(".avatar-image-frame");

  showcase.addEventListener("mousemove", (e) => {
    const rect = showcase.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / (rect.height / 2)) * -14;
    const tiltY = (x / (rect.width / 2)) * 14;

    frame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  showcase.addEventListener("mouseleave", () => {
    frame.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

/* --------------------------------------------------------------------------
   5. STATS COUNTER HYDRATION & ANIMATION
   -------------------------------------------------------------------------- */
function initStats() {
  const statsContainer = document.getElementById("bento-stats-container");
  if (!statsContainer || !window.PORTFOLIO_DATA?.stats) return;

  statsContainer.innerHTML = window.PORTFOLIO_DATA.stats.map(item => `
    <div class="stat-card glass-panel reveal-on-scroll">
      <div class="stat-icon">
        <i class="fa-solid fa-${item.icon === 'folder-code' ? 'laptop-code' : item.icon === 'award' ? 'trophy' : item.icon === 'calendar' ? 'clock' : 'layer-group'}"></i>
      </div>
      <div class="stat-number">${item.value}</div>
      <div class="stat-label">${item.label}</div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   6. SKILLS & TECH STACK INTERACTIVITY
   -------------------------------------------------------------------------- */
function initSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  const filterTabs = document.querySelectorAll(".skills-controls .tab-btn");
  const searchInput = document.getElementById("skills-search-input");
  if (!skillsGrid || !window.PORTFOLIO_DATA?.skills) return;

  const skills = window.PORTFOLIO_DATA.skills;
  let activeCategory = "all";
  let searchQuery = "";

  function renderSkills() {
    const filtered = skills.filter(skill => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      skillsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 12px; display: block; color: var(--accent-orange);"></i>
          <p>No skills found matching "${searchQuery}".</p>
        </div>
      `;
      return;
    }

    skillsGrid.innerHTML = filtered.map(skill => {
      return `
        <div class="skill-card glass-panel reveal-on-scroll" data-category="${skill.category}">
          <div class="skill-icon-wrap">
            ${getSkillIconSvg(skill.icon)}
          </div>
          <div class="skill-info">
            <div class="skill-top">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level-pct">${skill.level}%</span>
            </div>
            <div class="skill-progress-bar">
              <div class="skill-progress-fill" style="width: ${skill.level}%"></div>
            </div>
            ${skill.desc ? `<div class="skill-desc-text" style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">${skill.desc}</div>` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  // Filter Tabs Handler
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderSkills();
      initScrollAnimations();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderSkills();
      initScrollAnimations();
    });
  }

  renderSkills();
}

// Return SVG icons for skills
function getSkillIconSvg(iconName) {
  const iconMap = {
    python: '<svg viewBox="0 0 24 24"><path fill="#3776AB" d="M11.9 1.1c-4.3 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H6.1S3 5.3 3 9.6c0 4.3 2.7 4.1 2.7 4.1h1.6v-2.3s-.1-2.7 2.7-2.7h4.6s2.6.05 2.6-2.5V3.7s.35-2.6-5.3-2.6zm-2.4 1.3c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/><path fill="#FFD43B" d="M12.1 22.9c4.3 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h5.9s3.1.3 3.1-4c0-4.3-2.7-4.1-2.7-4.1h-1.6v2.3s.1 2.7-2.7 2.7H9.3s-2.6-.05-2.6 2.5v2.5s-.35 2.6 5.4 2.6zm2.4-1.3c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/></svg>',
    cpp: '<svg viewBox="0 0 24 24" fill="#00599C"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1.2 13.9a4.8 4.8 0 1 1 0-7.8l1 1.8a2.7 2.7 0 1 0 0 4.2zm4.1-3.2v-1.4h1.4v-1.4h-1.4V8.5h-1.4v1.4h-1.4v1.4h1.4v1.4zm3.8 0v-1.4h1.4v-1.4h-1.4V8.5h-1.4v1.4h-1.4v1.4h1.4v1.4z"/></svg>',
    sql: '<svg viewBox="0 0 24 24" fill="#E48E00"><path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm0 6c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm0 6c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3z"/></svg>',
    streamlit: '<svg viewBox="0 0 24 24" fill="#FF4B4B"><path d="M18.8 9.3l4.6 2.6c.4.2.6.7.6 1.1s-.2.9-.6 1.1l-10.8 6.2c-.4.2-.9.2-1.3 0L.6 14.1c-.4-.2-.6-.7-.6-1.1s.2-.9.6-1.1l4.6-2.6L12 13.2l6.8-3.9zM12 .7l10.8 6.2c.4.2.6.7.6 1.1s-.2.9-.6 1.1L18 11.9l-6-3.4-6 3.4L1.2 9.1c-.4-.2-.6-.7-.6-1.1s.2-.9.6-1.1L12 .7z"/></svg>',
    powerbi: '<svg viewBox="0 0 24 24" fill="#F2C811"><rect x="3" y="11" width="4" height="10" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>',
    excel: '<svg viewBox="0 0 24 24" fill="#217346"><path d="M21.17 3.25H8.83A1.83 1.83 0 0 0 7 5.08V7h14V5.08a1.83 1.83 0 0 0-1.83-1.83zM7 9v6h14V9zm0 8v1.92A1.83 1.83 0 0 0 8.83 20.75h12.34A1.83 1.83 0 0 0 23 18.92V17zM2.83 6.5A1.83 1.83 0 0 0 1 8.33v7.34A1.83 1.83 0 0 0 2.83 17.5h3.67V6.5zm3.17 8.33l-1.37-2.33 1.37-2.33H4.45L3.6 11.6l-.85-1.43H1.2l1.37 2.33L1.2 14.83h1.55l.85-1.43.85 1.43z"/></svg>',
    dsa: '<svg viewBox="0 0 24 24" fill="#FF5E1E"><circle cx="12" cy="4" r="2.5"/><circle cx="5" cy="14" r="2.5"/><circle cx="19" cy="14" r="2.5"/><circle cx="5" cy="20" r="2"/><circle cx="19" cy="20" r="2"/><path d="M12 6.5L5 11.5M12 6.5l7 5M5 16.5V18M19 16.5V18" stroke="#FF5E1E" stroke-width="1.8" fill="none"/></svg>',
    oop: '<svg viewBox="0 0 24 24" fill="none" stroke="#FF7236" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    dbms: '<svg viewBox="0 0 24 24" fill="#FF9F0A"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    html5: '<svg viewBox="0 0 24 24" fill="#E34F26"><path d="M12 2L3 5.4v13.2L12 22l9-3.4V5.4L12 2zm6.7 5.1l-.8 9.5-5.9 2.2-5.9-2.2-.8-9.5H18.7z"/></svg>',
    css3: '<svg viewBox="0 0 24 24" fill="#1572B6"><path d="M12 2L3 5.4v13.2L12 22l9-3.4V5.4L12 2zm6.7 5.1l-.8 9.5-5.9 2.2-5.9-2.2-.8-9.5H18.7z"/></svg>',
    vscode: '<svg viewBox="0 0 24 24" fill="#007ACC"><path d="M17.5 2.1l-9 8.2-4.8-3.7-2.2 1.1 3.8 3.8-3.8 3.8 2.2 1.1 4.8-3.7 9 8.2c.5.5 1.3.3 1.5-.4V2.5c-.2-.7-1-.9-1.5-.4zm0 14.9l-6.3-5.5 6.3-5.5v11z"/></svg>',
    git: '<svg viewBox="0 0 24 24" fill="#F05032"><circle cx="12" cy="12" r="3"/><path d="M12 3v6m0 6v6M3 12h6m6 0h6" stroke="#F05032" stroke-width="2"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="#FF5E1E" stroke-width="2"><path d="M4 12h16M12 4v16M2 8l4-4 4 4M14 20l4-4 4 4"/></svg>'
  };

  return iconMap[iconName] || '<i class="fa-solid fa-code text-orange"></i>';
}

// Return specialized project mockup HTML
function getProjectMockupHtml(project) {
  if (project.mockupType === "currency") {
    return `
      <div class="mockup-header-bar">
        <span>https://currency-converter.keshav.dev</span>
        <i class="fa-solid fa-bolt" style="color: #ff5e1e; font-size: 0.75rem;"></i>
      </div>
      <div style="padding: 14px 18px; display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.06); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
          <span style="font-family: var(--font-code); font-size: 0.85rem; color: #fff;">1.00 USD</span>
          <i class="fa-solid fa-arrow-right-arrow-left text-orange" style="font-size: 0.8rem;"></i>
          <span style="font-family: var(--font-code); font-size: 0.85rem; color: #10b981; font-weight: 600;">83.45 INR</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
          <span><i class="fa-solid fa-arrows-rotate"></i> Real-Time REST API</span>
          <span style="color: #ff9f0a;"><i class="fa-solid fa-chart-line"></i> Live Feed</span>
        </div>
      </div>
    `;
  } else if (project.mockupType === "expense") {
    return `
      <div class="mockup-header-bar">
        <span>terminal: python expense_tracker.py</span>
        <i class="fa-solid fa-terminal" style="color: #10b981; font-size: 0.75rem;"></i>
      </div>
      <div style="padding: 12px 16px; font-family: var(--font-code); font-size: 0.75rem; color: #b3b3c2; line-height: 1.6;">
        <div style="color: var(--accent-orange);">> [1] Add Expense • [2] View Expenses</div>
        <div style="color: #fff; margin-top: 4px;">+ Expense Recorded: "Software Tools" ($45.00)</div>
        <div style="color: #10b981; margin-top: 4px;">✓ Monthly Balance: Verified & Saved</div>
      </div>
    `;
  } else if (project.mockupType === "dsa") {
    return `
      <div class="mockup-header-bar">
        <span>g++ -O3 dsa_benchmark.cpp</span>
        <i class="fa-solid fa-code" style="color: #38bdf8; font-size: 0.75rem;"></i>
      </div>
      <div style="padding: 14px 18px; font-family: var(--font-code); font-size: 0.75rem; color: #b3b3c2;">
        <div style="color: #38bdf8;">struct TreeNode { int val; TreeNode *left, *right; };</div>
        <div style="margin-top: 6px; display: flex; gap: 8px;">
          <span style="background: rgba(56,189,248,0.15); color: #38bdf8; padding: 2px 8px; border-radius: 4px;">AVL Balance</span>
          <span style="background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 8px; border-radius: 4px;">O(log N) Search</span>
        </div>
      </div>
    `;
  } else if (project.mockupType === "bi") {
    return `
      <div class="mockup-header-bar">
        <span>Power BI • Analytics Dashboard</span>
        <i class="fa-solid fa-chart-pie" style="color: #f2c811; font-size: 0.75rem;"></i>
      </div>
      <div style="padding: 12px 16px; display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; gap: 10px;">
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 6px 10px; border-radius: 6px;">
            <div style="font-size: 0.68rem; color: var(--text-muted);">KPI Growth</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: #10b981;">+34.2%</div>
          </div>
          <div style="flex: 1; background: rgba(255,255,255,0.05); padding: 6px 10px; border-radius: 6px;">
            <div style="font-size: 0.68rem; color: var(--text-muted);">SQL Records</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: #f2c811;">12.5k</div>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="mockup-header-bar">
      <span>https://${project.id}.keshav.dev</span>
      <i class="fa-solid fa-shield-halved" style="color: #10b981; font-size: 0.75rem;"></i>
    </div>
    <div class="mockup-body-lines">
      <div class="mockup-chart-placeholder">
        <div class="mockup-bar" style="height: 45%;"></div>
        <div class="mockup-bar" style="height: 75%;"></div>
        <div class="mockup-bar" style="height: 60%;"></div>
        <div class="mockup-bar" style="height: 90%;"></div>
        <div class="mockup-bar" style="height: 40%;"></div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   7. TIMELINE (EXPERIENCE & EDUCATION TABS)
   -------------------------------------------------------------------------- */
function initTimeline() {
  const toggleBtns = document.querySelectorAll(".timeline-toggle .timeline-btn");
  const timelineContent = document.getElementById("timeline-content");
  if (!timelineContent || !window.PORTFOLIO_DATA) return;

  function renderExperience() {
    const exp = window.PORTFOLIO_DATA.experience || [];
    timelineContent.innerHTML = exp.map(item => `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-marker"></div>
        <div class="timeline-card glass-panel">
          <div class="timeline-header">
            <div>
              <h4 class="timeline-role">${item.role}</h4>
              <div class="timeline-company">${item.company} • ${item.location}</div>
            </div>
            <div class="timeline-period">
              <i class="fa-regular fa-clock"></i> ${item.period}
            </div>
          </div>
          <p class="timeline-desc">${item.description}</p>
          <div class="timeline-bullets">
            ${item.highlights.map(h => `
              <div class="timeline-bullet">
                <i class="fa-solid fa-circle-check"></i>
                <span>${h}</span>
              </div>
            `).join("")}
          </div>
          <div class="timeline-tags">
            ${item.skills.map(s => `<span class="timeline-tag">${s}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  function renderEducation() {
    const edu = window.PORTFOLIO_DATA.education || [];
    timelineContent.innerHTML = edu.map(item => `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-marker"></div>
        <div class="timeline-card glass-panel">
          <div class="timeline-header">
            <div>
              <h4 class="timeline-role">${item.degree}</h4>
              <div class="timeline-company">${item.institution}</div>
            </div>
            <div class="timeline-period">
              <i class="fa-regular fa-calendar"></i> ${item.period}
            </div>
          </div>
          <div style="margin-bottom: 12px; color: var(--accent-orange); font-weight: 600; font-size: 0.9rem;">
            <i class="fa-solid fa-award"></i> ${item.grade}
          </div>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `).join("");
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const type = btn.getAttribute("data-timeline");
      if (type === "education") {
        renderEducation();
      } else {
        renderExperience();
      }
      initScrollAnimations();
    });
  });

  renderExperience();
}

/* --------------------------------------------------------------------------
   8. FEATURED PROJECTS
   -------------------------------------------------------------------------- */
function initProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  if (!projectsGrid || !window.PORTFOLIO_DATA?.projects) return;

  const projects = window.PORTFOLIO_DATA.projects;
  let activeFilter = "all";

  function renderProjects() {
    const filtered = projects.filter(p => {
      if (activeFilter === "all") return true;
      return p.category === activeFilter;
    });

    projectsGrid.innerHTML = filtered.map(p => `
      <div class="project-card glass-panel reveal-on-scroll" data-project-id="${p.id}">
        <div class="project-window-top">
          <div class="window-dots">
            <span class="dot-red"></span>
            <span class="dot-yellow"></span>
            <span class="dot-green"></span>
          </div>
          <span class="window-category-badge">${p.badge}</span>
        </div>

        <div class="project-preview" style="background: ${p.imageGrad};">
          <div class="project-preview-mockup">
            ${getProjectMockupHtml(p)}
          </div>
        </div>

        <div class="project-body">
          <div>
            <h4 class="project-title">${p.title}</h4>
            <div class="project-subtitle">${p.subtitle}</div>
            <p class="project-desc">${p.description}</p>
          </div>

          <div>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
            </div>

            <div class="project-footer">
              <div class="project-links">
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View GitHub Repository">
                  <i class="fa-brands fa-github"></i> Code
                </a>
                <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
                </a>
              </div>
              <button class="project-details-btn" onclick="openProjectModal('${p.id}')">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderProjects();
      initScrollAnimations();
    });
  });

  renderProjects();
}

// Project Details Modal Handler
window.openProjectModal = function(projectId) {
  const project = window.PORTFOLIO_DATA?.projects?.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById("project-modal-overlay");
  const modalBody = document.getElementById("project-modal-body");
  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
      <div>
        <span class="section-badge"><span class="dot"></span> ${project.badge}</span>
        <h3 style="font-size: 2rem; color: #fff; margin-top: 6px;">${project.title}</h3>
      </div>
    </div>

    <div style="height: 240px; background: ${project.imageGrad}; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; border: 1px solid var(--border-subtle);">
      <div style="text-align: center; color: #fff;">
        <i class="fa-solid fa-laptop-code" style="font-size: 3rem; color: var(--accent-orange); margin-bottom: 12px; display: block;"></i>
        <h4 style="font-size: 1.2rem;">${project.subtitle}</h4>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h5 style="font-size: 1.1rem; color: #fff; margin-bottom: 8px;">Project Overview</h5>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.description}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h5 style="font-size: 1.1rem; color: #fff; margin-bottom: 12px;">Core Architecture & Tech Stack</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${project.tags.map(t => `<span class="highlight-pill"><i class="fa-solid fa-code"></i> ${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 16px; margin-top: 24px;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">
        <i class="fa-brands fa-github"></i> View Source Code
      </a>
      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
        <i class="fa-solid fa-globe"></i> Launch Live Preview
      </a>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closeProjectModal = function() {
  const modalOverlay = document.getElementById("project-modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
};

/* --------------------------------------------------------------------------
   9. SERVICES SECTION
   -------------------------------------------------------------------------- */
function initServices() {
  const servicesGrid = document.getElementById("services-grid");
  if (!servicesGrid || !window.PORTFOLIO_DATA?.services) return;

  servicesGrid.innerHTML = window.PORTFOLIO_DATA.services.map(s => `
    <div class="service-card glass-panel reveal-on-scroll">
      <div class="service-header">
        <div class="service-icon">
          <i class="fa-solid fa-${s.icon === 'code' ? 'code' : s.icon === 'layout' ? 'object-group' : s.icon === 'zap' ? 'bolt' : s.icon === 'shopping-bag' ? 'cart-shopping' : s.icon === 'server' ? 'server' : 'swatchbook'}"></i>
        </div>
        <h4 class="service-title">${s.title}</h4>
        <p class="service-desc">${s.description}</p>
      </div>

      <div>
        <div class="service-deliverables">
          ${s.deliverables.map(d => `
            <div class="service-deliverable-item">
              <i class="fa-solid fa-check"></i>
              <span>${d}</span>
            </div>
          `).join("")}
        </div>

        <button class="service-inquire-btn" onclick="inquireService('${s.title}')">
          Request Service <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join("");
}

window.inquireService = function(serviceTitle) {
  const contactSection = document.getElementById("contact");
  const projectTypeSelect = document.getElementById("form-project-type");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  if (projectTypeSelect) {
    // Attempt to match or set value
    projectTypeSelect.value = "Web Development";
    showToast(`Service "${serviceTitle}" pre-selected in contact form.`);
  }
};

/* --------------------------------------------------------------------------
   10. CERTIFICATIONS & ACHIEVEMENTS
   -------------------------------------------------------------------------- */
function initCertifications() {
  const certGrid = document.getElementById("cert-grid");
  if (!certGrid || !window.PORTFOLIO_DATA?.certifications) return;

  certGrid.innerHTML = window.PORTFOLIO_DATA.certifications.map(c => `
    <div class="cert-card glass-panel reveal-on-scroll">
      <div>
        <div class="cert-top">
          <div class="cert-badge-icon">
            <i class="fa-solid fa-certificate"></i>
          </div>
          <span class="cert-year">${c.date}</span>
        </div>
        <h4 class="cert-title">${c.title}</h4>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-skills">
          ${c.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join("")}
        </div>
      </div>

      <div class="cert-footer">
        <span class="cert-id">${c.credentialId}</span>
        <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
          Verify <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   11. RESUME MODAL & PRINT HANDLER
   -------------------------------------------------------------------------- */
function initResumeModal() {
  window.openResumeModal = function() {
    const modal = document.getElementById("resume-modal-overlay");
    if (modal) {
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeResumeModal = function() {
    const modal = document.getElementById("resume-modal-overlay");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  window.printResume = function() {
    window.print();
  };
}

/* --------------------------------------------------------------------------
   12. CONTACT FORM & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const copyBtn = document.getElementById("copy-email-btn");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = window.PORTFOLIO_DATA?.personal?.email || "Keshavsaini1505@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      // Simulate sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sending Message...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast("Thank you, Keshav! Your message has been sent successfully.");
      }, 1200);
    });
  }
}

// Show Toast Notification
window.showToast = function(message) {
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check toast-icon"></i>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
};

/* --------------------------------------------------------------------------
   13. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  elements.forEach(el => observer.observe(el));
}
