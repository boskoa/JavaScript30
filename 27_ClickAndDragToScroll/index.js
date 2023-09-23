const viewport = document.getElementById("viewport");
let condition = false;
let startX;
let scrollLeft;

function move(e) {
  if (!condition) return;
  e.preventDefault();

  const x = e.pageX - viewport.offsetLeft;
  const slide = (x - startX) * 3;
  viewport.scrollLeft = scrollLeft - slide;
}

viewport.addEventListener("mousedown", (e) => {
  condition = true;
  viewport.classList.add("active");
  startX = e.pageX - viewport.offsetLeft;
  scrollLeft = viewport.scrollLeft;
});
viewport.addEventListener("mouseup", () => {
  condition = false;
  viewport.classList.remove("active");
});
viewport.addEventListener("mouseleave", () => {
  condition = false;
  viewport.classList.remove("active");
});
viewport.addEventListener("mousemove", move);
