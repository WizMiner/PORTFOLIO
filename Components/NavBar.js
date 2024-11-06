// Scroll Effect for Navbar
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("window-scroll");
  } else {
    nav.classList.remove("window-scroll");
  }
});

// Mobile Menu Toggle
const toggleMenuButton = document.getElementById("toggle-menu");
const navMenu = document.querySelector(".nav_menu");

toggleMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Hide/Show Navbar on Scroll Up/Down
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScrollTop) {
    // Scroll down
    navMenu.classList.remove("active");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
