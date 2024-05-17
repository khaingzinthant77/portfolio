function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if the current date is before the birthdate in the current year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

document.addEventListener("DOMContentLoaded", function () {
  const ageDisplayElement = document.getElementById("age-display");
  const birthdate = ageDisplayElement.getAttribute("data-birthdate");
  const age = calculateAge(birthdate);
  ageDisplayElement.textContent = age;

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
