// Example blog data
const blogData = [
  {
    title: "The Importance of Learning JavaScript",
    description:
      "JavaScript is an essential language for web development, enabling interactive features on websites.",
    image: "https://via.placeholder.com/350x200",
    link: "#",
  },
  {
    title: "Responsive Design Tips",
    description:
      "Learn the best practices for creating responsive, user-friendly websites.",
    image: "https://via.placeholder.com/350x200",
    link: "#",
  },
  {
    title: "Understanding CSS Grid",
    description:
      "CSS Grid is a powerful layout tool that makes designing web pages easier and more flexible.",
    image: "https://via.placeholder.com/350x200",
    link: "#",
  },
  // Add more blog data as needed
];

const blogList = document.getElementById("blog-list");

// Function to render blogs
function renderBlogs() {
  blogData.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
          <img src="${blog.image}" alt="${blog.title}">
          <div class="blog-content">
            <h3 class="blog-title"><i class="fas fa-book"></i> ${blog.title}</h3>
            <p class="blog-description">${blog.description}</p>
            <a href="${blog.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        `;

    blogList.appendChild(blogCard);
  });
}

// Initial rendering of blogs
renderBlogs();

document.getElementById("toggle-menu").addEventListener("click", function () {
  const navMenu = document.querySelector(".nav_menu");
  navMenu.classList.toggle("show");
});
