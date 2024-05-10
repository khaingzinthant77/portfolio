document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      sections.forEach((section) => {
        if (section.id === targetId) {
          section.style.display = "block";
          // Add active class to the clicked link
          link.classList.add("active");
        } else {
          section.style.display = "none";
        }
      });
      // Remove active class from all other links
      navLinks.forEach((otherLink) => {
        if (otherLink !== link) {
          otherLink.classList.remove("active");
        }
      });
    });
  });
});
