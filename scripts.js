// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    projects.forEach((project) => {
      if (project.classList.contains(category) || category === "all") {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

function opentab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-contents");
  tabContents.forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  // Remove 'active-link' from all tab links
  const tabLinks = document.querySelectorAll(".tab-links");
  tabLinks.forEach((link) => {
    link.classList.remove("active-link");
  });

  // Show the content of the clicked tab
  const activeTab = document.getElementById(tabName);
  if (activeTab) {
    activeTab.classList.add("active-tab");
  }

  // Add 'active-link' to the clicked tab
  const activeLink = document.querySelector(
    `[onclick="opentab('${tabName}')"]`
  );
  if (activeLink) {
    activeLink.classList.add("active-link");
  }
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
