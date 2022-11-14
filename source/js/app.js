import ScrollReveal from "scrollreveal";

window.addEventListener("scroll", () => {
  scrollHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
});

function showMenu() {
  const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close"),
    navLink = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }),
  );
}

function scrollHeader() {
  const header = document.querySelector("#header");

  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
}
