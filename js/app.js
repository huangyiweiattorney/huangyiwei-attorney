// Huang YiWei Attorney Website

document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navBackdrop = document.getElementById("navBackdrop");

  // ---- Mobile hamburger menu ----
  function openMenu(){
    navMenu.classList.add("open");
    navBackdrop.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu(){
    navMenu.classList.remove("open");
    navBackdrop.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if(navToggle){
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });
  }

  if(navBackdrop){
    navBackdrop.addEventListener("click", closeMenu);
  }

  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeMenu();
  });

  // ---- Highlight current page in nav ----
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar ul a").forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if(linkPath === currentPath){
      link.classList.add("active");
    }
  });

  // ---- Navbar background on scroll ----
  function updateNavbarState(){
    if(window.scrollY > 40){
      navbar.classList.add("scrolled");
    }else{
      navbar.classList.remove("scrolled");
    }
  }
  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState, { passive:true });

  // ---- Scroll-triggered fade/rise animation ----
  const revealTargets = document.querySelectorAll(
    ".card, .consult-card, .profile-image, .profile-frame, .preview-card, .contact-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  revealTargets.forEach(el => observer.observe(el));

  // Stagger cards within the same grid for a smoother cascade
  document.querySelectorAll(".cards, .consultation-grid, .preview-grid").forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 90}ms`;
    });
  });

});
/* =========================================================
   LANGUAGE DROPDOWN LOGIC
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  const langDropdown = document.querySelector('.lang-dropdown');
  if (!langDropdown) return;

  const langToggle = langDropdown.querySelector('.lang-toggle');

  langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
    langToggle.setAttribute(
      'aria-expanded',
      langDropdown.classList.contains('open') ? 'true' : 'false'
    );
  });

  // Close dropdown when clicking anywhere outside it
  document.addEventListener('click', function (e) {
    if (!langDropdown.contains(e.target)) {
      langDropdown.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close dropdown when pressing Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      langDropdown.classList.remove('open');
      langToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
