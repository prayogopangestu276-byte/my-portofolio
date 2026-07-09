/* =========================================================================
   MAIN.JS — navigasi, efek ketik, scroll reveal, progress bar, counter,
   dan render kartu proyek dari data/projects.js
   ========================================================================= */

// ---- Burger menu (mobile) ----
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---- Typed text effect ----
const words = ['Front-End Developer', 'Logo Designer', 'Pembuat Identitas Visual'];
const typedEl = document.getElementById('typedText');
let wi = 0, ci = 0, deleting = false;
function typeLoop() {
  const word = words[wi];
  if (!deleting) {
    ci++;
    typedEl.textContent = word.slice(0, ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    ci--;
    typedEl.textContent = word.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 85);
}
typeLoop();

// ---- Render kartu proyek dari data/projects.js ----
function renderProjects() {
  const grid = document.getElementById('projGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;
  grid.innerHTML = PROJECTS.map((p) => {
    const num = String(p.id).padStart(2, '0');
    return `
      <div class="proj-card">
        <span class="proj-num">${num}</span>
        <img class="proj-thumb" src="${p.image}" alt="${p.title}">
        <div class="proj-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <a href="${p.link}" target="_blank" class="proj-link">LIHAT PROYEK <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>`;
  }).join('');
}
renderProjects();

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// ---- Skill bars fill on view ----
const bars = document.querySelectorAll('.bar-fill');
const barIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width + '%';
        barIo.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 }
);
bars.forEach((b) => barIo.observe(b));

// ---- Counter numbers ----
const counters = document.querySelectorAll('.stat-num');
const countIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const target = +e.target.dataset.count;
        let cur = 0;
        const step = Math.max(1, Math.round(target / 40));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            clearInterval(t);
          }
          e.target.textContent = cur;
        }, 30);
        countIo.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => countIo.observe(c));

// ---- Header shadow on scroll ----
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 30 ? '0 6px 22px rgba(0,0,0,.4)' : 'none';
});
