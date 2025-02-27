document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section.hidden");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const navLinksArray = document.querySelectorAll(".nav-links a");
  navLinksArray.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("show");
    });
  });
});
