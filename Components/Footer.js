// Smooth Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/Hide Scroll-to-Top Button based on Scroll Position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth Scroll to Top on Button Click
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Collapsible Footer Sections for Small Screens
const collapsibleSections = document.querySelectorAll(".collapsible");

function handleCollapsibleSections() {
  if (window.innerWidth <= 768) {
    collapsibleSections.forEach((section) => {
      const title = section.querySelector(".footer-title");
      const content = section.querySelector("ul");

      // Set initial state for collapsible sections
      section.classList.add("collapsed");
      content.style.display = "none";

      // Toggle section on title click
      title.addEventListener("click", () => {
        section.classList.toggle("collapsed");
        content.style.display = section.classList.contains("collapsed")
          ? "none"
          : "block";
      });
    });
  } else {
    collapsibleSections.forEach((section) => {
      // Reset collapsible sections for larger screens
      section.classList.remove("collapsed");
      section.querySelector("ul").style.display = "block";
    });
  }
}

// Initial call
handleCollapsibleSections();

// Resize Listener to Reset Collapsible State on Large Screens
window.addEventListener("resize", handleCollapsibleSections);
