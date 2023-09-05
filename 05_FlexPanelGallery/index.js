const panels = document.querySelectorAll(".panels");

function expand(e) {
  let alreadyClicked = false;

  panels.forEach((p) => {
    p.classList.remove("clicked-intro");
    if (Array.from(e.target.classList).includes("clicked")) {
      alreadyClicked = true;
      return p.classList.remove("clicked");
    }
    p.classList.remove("clicked");
  });

  Array.from(e.target.classList).includes("panels")
    ? !alreadyClicked && e.target.classList.add("clicked")
    : !alreadyClicked && e.target.classList.add("clicked");
}

panels.forEach((p) => {
  p.addEventListener("mousedown", expand);
});
