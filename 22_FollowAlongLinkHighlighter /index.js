const main = document.getElementById("main");
const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
main.appendChild(highlight);

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const box = link.getBoundingClientRect();
    highlight.style.transform = `translate(${box.left + window.scrollX}px, ${
      box.top + window.scrollY
    }px)`;
    highlight.style.height = `${link.offsetHeight}px`;
    highlight.style.width = `${link.offsetWidth}px`;
  });
});
