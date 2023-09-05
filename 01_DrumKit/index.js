const keys = [
  document.getElementById("a"),
  document.getElementById("s"),
  document.getElementById("d"),
  document.getElementById("f"),
  document.getElementById("g"),
  document.getElementById("h"),
  document.getElementById("j"),
  document.getElementById("k"),
  document.getElementById("l"),
];

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.code}]`);
  const key = document.querySelector(`.keys[data-key=${e.code}]`);

  if (!audio || !key) return;

  key.classList.add("pressed");

  audio.currentTime = 0;
  audio.play();
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.keys[data-key=${e.code}]`);

  if (!key) return;

  key.classList.remove("pressed");
});

keys.forEach((k) => {
  k.addEventListener("mousedown", () => {
    const audio = document.querySelector(`audio[data-key=${k.dataset.key}]`);

    if (!audio) return;

    k.classList.add("pressed");
    audio.currentTime = 0;
    audio.play();
  });
});

keys.forEach((k) => {
  k.addEventListener("mouseup", () => {
    k.classList.remove("pressed");
  });
});
