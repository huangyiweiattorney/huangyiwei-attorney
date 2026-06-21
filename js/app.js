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

  // Close menu after tapping a link
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeMenu();
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".card, .consult-card, .profile-image")
    .forEach(el => observer.observe(el));

});
