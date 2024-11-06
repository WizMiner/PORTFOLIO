/* Hover Effects for Cards and Profile Image */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const profileImage = document.querySelector(".profile-img");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.border = "2px solid #007bff";
      card.style.boxShadow = "0 4px 8px rgba(0, 123, 255, 0.3)";
    });

    card.addEventListener("mouseout", () => {
      card.style.border = "none";
      card.style.boxShadow = "none";
    });
  });

  profileImage.addEventListener("mouseover", () => {
    profileImage.style.border = "3px solid #007bff";
    profileImage.style.transform = "scale(1.05)";
  });

  profileImage.addEventListener("mouseout", () => {
    profileImage.style.border = "none";
    profileImage.style.transform = "scale(1)";
  });
});

// Function to check if an element is in the viewport
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to trigger bounce animations based on scroll position
function triggerBounceOnScroll() {
  const elements = document.querySelectorAll(".bounce-left, .bounce-right");

  elements.forEach((element) => {
    // If the element is in the viewport, add the appropriate class
    if (isElementInView(element)) {
      if (element.classList.contains("bounce-left")) {
        // Trigger the bounce from the left
        element.classList.remove("bounce-left");
        element.classList.add("bounce-right");
      } else if (element.classList.contains("bounce-right")) {
        // Trigger the bounce from the right
        element.classList.remove("bounce-right");
        element.classList.add("bounce-left");
      }
    }
  });
}

// Event listener for scroll events
window.addEventListener("scroll", triggerBounceOnScroll);

// Initial check to trigger animation on page load
window.addEventListener("load", triggerBounceOnScroll);

// Optional: Adding the scroll direction logic to manage scroll-up vs scroll-down
let lastScrollTop = 0; // Variable to store last scroll position

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the scroll direction is up or down
  if (scrollTop > lastScrollTop) {
    // Scrolling Down
    document.querySelectorAll(".bounce-left").forEach((el) => {
      el.classList.remove("bounce-left");
      el.classList.add("bounce-right"); // Add the bounce-right class
    });
  } else {
    // Scrolling Up
    document.querySelectorAll(".bounce-right").forEach((el) => {
      el.classList.remove("bounce-right");
      el.classList.add("bounce-left"); // Add the bounce-left class
    });
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Ensure it's not negative
});
