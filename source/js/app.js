import ScrollReveal from "scrollreveal";

window.addEventListener("scroll", () => {
  scrollHeader();
  scrollUp();
  scrollActive();
});

document.addEventListener("DOMContentLoaded", () => {
  showMenu();
  darkTheme();
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

function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");

  window.scrollY >= 350
    ? scrollUp.classList.add("scroll-show")
    : scrollUp.classList.remove("scroll-show");
}

function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeader = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`,
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeader) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
}

function darkTheme() {
  const themeButton = document.querySelector("#theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "ri-sun-line",
    selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon"),
    getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light",
    getCurrentIcon = () =>
      document.body.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})