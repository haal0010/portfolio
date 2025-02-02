document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const menu = document.querySelector(".menu");
  const sections = document.querySelectorAll(".about-me, .portfolio, .icons, .skills-line, .contact,.moi,footer");

  burger.addEventListener("click", burgerClick);

  function burgerClick() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");

    // Move sections when the menu is active
    sections.forEach((section) => {
      section.classList.add("active");
    });
  }

  menu.addEventListener("click", menuClick);

  function menuClick() {
    burger.classList.remove("active");
    nav.classList.remove("active");
    // Reset section movement
    sections.forEach((section) => {
      section.classList.remove("active");
    });
  }
});
