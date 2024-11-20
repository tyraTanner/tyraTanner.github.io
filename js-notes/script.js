"use strict";

const body = document.querySelector("body");
const sidenav = document.querySelector(".sidenav-left");
const sidenavLinks = document.querySelectorAll(".links");
const mobileMenu = document.querySelector(".fa-bars");
const scrollTop = document.querySelector(".scroll-top");

function menuToggle() {
  sidenav.classList.toggle("sidenav-open");
  body.classList.toggle("no-scroll");
}

// Menu clicked, it opens
mobileMenu.addEventListener("click", function (e) {
  menuToggle();
});

// Once a link is clicked, it closes menu
sidenavLinks.forEach((e) => {
  e.addEventListener("click", function () {
    menuToggle();
  });
});

// Scrolling will make to-top button appear
window.addEventListener("scroll", function () {
  if (!sidenav.classList.contains("sidenav-open") & (scrollY > 2000)) {
    scrollTop.classList.add("scroll-top-open");
  } else {
    scrollTop.classList.remove("scroll-top-open");
  }
});

// Adds an example h4 under creating elements in DOM section
const subTitle = document.createElement("h4");
subTitle.innerHTML = "An h4 is a smaller title with extra info";
document.querySelector(".create-el").after(subTitle);
