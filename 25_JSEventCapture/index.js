const allDivs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.id);
  //e.stopPropagation();
  //console.log(this);
}

allDivs.forEach((d) =>
  d.addEventListener("click", logText, { capture: false, once: true })
);
