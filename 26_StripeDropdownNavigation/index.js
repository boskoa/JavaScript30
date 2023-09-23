const main = document.getElementById("main");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".nav-links");
const highlight = document.querySelector(".move");
const subMenus = document.querySelectorAll(".sub-menu");
const arrow = document.querySelector(".arrow");

links.forEach((link) => {
  const hiddenElement = link.childNodes[3];
  link.addEventListener("mouseenter", () => {
    hiddenElement.classList.remove("hidden");
    const box = hiddenElement.getBoundingClientRect();
    highlight.style.transform = `translate(${box.left + window.scrollX}px, ${
      box.top + window.scrollY
    }px)`;
    highlight.style.height = `${hiddenElement.offsetHeight}px`;
    highlight.style.width = `${hiddenElement.offsetWidth}px`;
    highlight.classList.add("show");
    arrow.style.left = `${(hiddenElement.offsetWidth - 20) / 2}px`;
  });

  link.addEventListener("mouseleave", () => {
    hiddenElement.classList.add("hidden");
  });
});

nav.addEventListener("mouseleave", () => {
  highlight.classList.remove("show");
  highlight.style.transform = "scale(0)";
});
