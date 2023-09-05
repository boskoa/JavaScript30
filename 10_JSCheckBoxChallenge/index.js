const labels = document.querySelectorAll("label");
let shift = false;
let from = null;
let to = null;

document.addEventListener("keydown", (e) => {
  shift = e.key === "Shift" && true;
});

document.addEventListener("keyup", (e) => {
  shift = false;
  to = null;
});

labels.forEach((l) => {
  l.addEventListener("mousedown", (e) => {
    if (!shift) {
      from = Array.prototype.indexOf.call(labels, l);
    }
    if (shift) {
      if (from === null) {
        from = Array.prototype.indexOf.call(labels, l);
      }
      to = Array.prototype.indexOf.call(labels, l);
    }
  });
});

document.addEventListener("mousedown", () => {
  if (shift) {
    if (from !== null && to !== null) {
      labels.forEach((s) => {
        const index = Array.prototype.indexOf.call(labels, s);
        if ((index >= from && index < to) || (index <= from && index > to)) {
          s.firstChild.checked = true;
        } else {
          s.firstChild.checked = false;
        }
      });
    }
  }
});
