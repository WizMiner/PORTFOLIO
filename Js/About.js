// Smooth Scroll to Anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // Trigger animation when 20% of element is in view
  }
);

document.querySelectorAll(".fade-in-target").forEach((el) => {
  observer.observe(el);
});

// Hover Effect for Team Members
document.querySelectorAll(".team_member").forEach((member) => {
  member.addEventListener("mouseenter", () => {
    member.style.transform = "scale(1.05)";
  });
  member.addEventListener("mouseleave", () => {
    member.style.transform = "scale(1)";
  });
});

// Theme Toggle (Optional Feature)
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
      ? "Light Mode"
      : "Dark Mode";
  });
}
