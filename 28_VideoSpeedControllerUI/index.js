const video = document.getElementById("video");
const speed = document.getElementById("speed");
const speedInput = document.getElementById("speed-input");
const sliderBar = document.getElementById("speed-input-bar");
const text = document.getElementById("text");
let clicked = false;
let videoHeight;
let topDistance;
let playbackRate;

window.addEventListener("load", () => {
  videoHeight = video.offsetHeight;
  speed.style.height = `${videoHeight}px`;
  topDistance = speed.getBoundingClientRect().top;
  speedInput.style.height = `${videoHeight}px`;
  speedInput.style.transform = "scaleY(0.5)";
  playbackRate = 1;
});

sliderBar.addEventListener("mousedown", () => {
  clicked = true;
});

speed.addEventListener("mouseleave", () => {
  clicked = false;
});

sliderBar.addEventListener("mouseup", () => {
  clicked = false;
});

speed.addEventListener("mousemove", (e) => {
  if (!clicked) return;
  move(e);
});

speed.addEventListener("click", (e) => {
  if (clicked) return;
  move(e);
});

function move(e) {
  e.preventDefault();
  let height = e.clientY - topDistance;
  if (height < 10) clicked = height = 10;
  if (height > videoHeight - 10) height = videoHeight - 10;
  const multiplier =
    height / videoHeight <= 0.5 ? 0 : (height / videoHeight) * 4.2 - 2;
  speedInput.style.transform = `scaleY(${height / videoHeight})`;
  sliderBar.style.transform = `translateY(${height - videoHeight / 2}px)`;
  playbackRate = Number(((height / videoHeight) * 2 + multiplier).toFixed(1));
  video.playbackRate = playbackRate;
  text.innerText = `${playbackRate.toFixed(1)}x`;
  text.style.bottom = multiplier === 0 ? "-10px" : "15px";
  text.style.color = multiplier === 0 ? "cyan" : "purple";
}
