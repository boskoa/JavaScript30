const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const color = document.getElementById("color");

spacing.addEventListener("input", (e) => {
  document.documentElement.style.setProperty(
    "--spacing",
    `${e.target.value}px`
  );
});

blur.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--blur", `${e.target.value}px`);
});

color.addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--base", e.target.value);
});
