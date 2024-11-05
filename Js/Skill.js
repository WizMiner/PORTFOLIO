const skillSections = document.querySelectorAll(".skills-section");

skillSections.forEach((section) => {
  section.addEventListener("click", () => {
    const skillsList = section.querySelector(".skills-list");
    const icon = section.querySelector("i.fa-chevron-down");

    // Toggle visibility of skills list
    skillsList.style.display =
      skillsList.style.display === "flex" ? "none" : "flex";

    // Rotate icon
    icon.style.transform =
      skillsList.style.display === "flex" ? "rotate(180deg)" : "rotate(0deg)";
  });
});

const skillItems = document.querySelectorAll(".skill");

skillItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'active' class from all items
    skillItems.forEach((i) => i.classList.remove("active"));

    // Add 'active' class to the clicked item
    item.classList.add("active");
  });
});
