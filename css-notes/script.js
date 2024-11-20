const body = document.querySelector("body");
const container = document.querySelector(".container");
const mainContent = document.querySelector("main");
const navLinks = document.querySelectorAll(".links");
const sidenav = document.querySelector(".sidenav");
const hamMenu = document.querySelector(".fa-bars");
const headerTitle = document.querySelector(".header-title");
const modalBackground = document.querySelector(".modal-background");

function modalToggle() {
  body.classList.toggle("no-scroll"); // Disables scroll while modal open
  container.classList.toggle("background-white"); // Sets background white on modal click
  headerTitle.classList.toggle("no-display-mobile"); // Header-title toggles, disappears if X-close appears
  modalBackground.classList.toggle("modal-background-open"); // Adds shadowed background behind modal
  mainContent.classList.toggle("is-blurred"); // Adds blur to background behind modal
  sidenav.classList.toggle("sidenav-open"); // Sidenav appear as modal on click and toggles on and off
  setTimeout(() => sidenav.classList.toggle("sidenav-closing"), 800); // Sidenav transitions to closed
}

// Closes modal when click on a nav link
navLinks.forEach((e) => {
  e.addEventListener("click", function () {
    modalToggle();
  });
});

hamMenu.addEventListener("click", function () {
  modalToggle();
});

// If user clicks anywhere outside of modal, it closes.
modalBackground.addEventListener("click", function () {
  if (modalBackground.classList.contains("modal-background-open")) {
    modalToggle();
  }
});
