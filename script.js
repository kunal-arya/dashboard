const hamburgerEl = document.getElementById("hamburger");
const hamburgerOutsideEl = document.getElementById("hamburger-outside");
const menuEl = document.getElementById("menu-section");

function hamburgerClickHandler() {
  if (
    Array.from(menuEl.classList).find((className) => className == "hidden-menu")
  ) {
    menuEl.classList.remove("hidden-menu");
    hamburgerOutsideEl.classList.add("hamburger-outside-hidden");
  } else {
    menuEl.classList.add("hidden-menu");
    hamburgerOutsideEl.classList.remove("hamburger-outside-hidden");
  }
}

hamburgerEl.addEventListener("click", hamburgerClickHandler);

hamburgerOutsideEl.addEventListener("click", hamburgerClickHandler);
