const nav = document.getElementById("main");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");

function stickNav() {
  if (window.scrollY > header.offsetHeight) {
    nav.classList.add("nav-fix");
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    logo.style.maxWidth = "300px";
  } else {
    nav.classList.remove("nav-fix");
    document.body.style.paddingTop = 0;
    logo.style.maxWidth = "0px";
  }
}

document.addEventListener("scroll", stickNav);
