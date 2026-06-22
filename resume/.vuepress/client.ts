import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import Experiences from "./components/Experiences.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Experiences", Experiences);
  },
  setup() {
    setupTransparentNavbar({ light: "#333", dark: "#fff" });

    // Only run in browser
    if (typeof window === "undefined") return;

    // ===== Scroll-triggered fade-in =====
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all h2 sections + cards
    document.addEventListener("DOMContentLoaded", () => {
      // Add fade-in class to major sections
      const sections = document.querySelectorAll(
        "h2, .profile-card, .skill-section, .edu-item, .project-card, .cert-card, .eval-card, .vp-experience, .honors-content li, .open-source-card"
      );
      sections.forEach((el) => {
        el.classList.add("cyber-fade-in");
        // Mark visible immediately if already in view
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    });

    // ===== Carousel initialization =====
    function initCarousel() {
      const container = document.querySelector('.carousel-wrapper');
      if (!container) return;
      // Already initialized?
      if (container.classList.contains('carousel-initialized')) return;
      container.classList.add('carousel-initialized');

      const slides = container.querySelector('.carousel-slides');
      if (!slides) return;
      const slideEls = slides.querySelectorAll('.carousel-slide');
      const prevBtn = container.querySelector('.carousel-prev');
      const nextBtn = container.querySelector('.carousel-next');
      const dotsContainer = container.querySelector('.carousel-dots');
      if (!prevBtn || !nextBtn || !dotsContainer) return;
      let current = 0;
      const total = slideEls.length;
      if (total === 0) return;

      // Create dots
      dotsContainer.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('span');
        if (i === 0) dot.className = 'active';
        dot.dataset.index = i;
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }

      const dots = dotsContainer.querySelectorAll('span');

      function goTo(index) {
        current = index;
        slides.style.transform = 'translateX(-' + (current * 100) + '%)';
        dots.forEach((d, i) => d.className = i === current ? 'active' : '');
      }

      prevBtn.addEventListener('click', () => {
        goTo(current === 0 ? total - 1 : current - 1);
      });
      nextBtn.addEventListener('click', () => {
        goTo(current === total - 1 ? 0 : current + 1);
      });

      // Auto play
      let timer = setInterval(() => {
        goTo(current === total - 1 ? 0 : current + 1);
      }, 3500);

      container.addEventListener('mouseenter', () => clearInterval(timer));
      container.addEventListener('mouseleave', () => {
        timer = setInterval(() => {
          goTo(current === total - 1 ? 0 : current + 1);
        }, 3500);
      });
    }

    // ===== Footer live clock =====
    function initClock() {
      const footer = document.querySelector("footer");
      if (!footer) return;
      // Don't duplicate
      if (footer.querySelector(".cyber-clock")) return;
      const clock = document.createElement("div");
      clock.className = "cyber-clock";
      clock.style.cssText = `
        text-align: center;
        font-family: 'Fira Code', monospace;
        font-size: 0.85rem;
        color: var(--cyber-cyan, #00f0ff);
        opacity: 0.7;
        margin-top: 0.5rem;
        letter-spacing: 0.2em;
      `;
      footer.appendChild(clock);

      function tick() {
        const now = new Date();
        const beijing = new Intl.DateTimeFormat("zh-CN", {
          timeZone: "Asia/Shanghai",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        clock.textContent = `⏣ SYSTEM TIME: ${beijing} CST`;
      }
      tick();
      setInterval(tick, 1000);
    }

    // Wait for VuePress to mount
    let waitCount = 0;
    const waitForReady = setInterval(() => {
      waitCount++;
      const footer = document.querySelector("footer");
      const carousel = document.querySelector('.carousel-wrapper');
      if (footer) initClock();
      if (carousel) initCarousel();
      if (footer && carousel) clearInterval(waitForReady);
      if (waitCount > 50) clearInterval(waitForReady); // 10s timeout
    }, 200);
  },
});
