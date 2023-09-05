const player = document.getElementById("player");
const video = document.getElementById("video");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-filled");
const playButton = document.getElementById("player-button");
const skipButtons = document.querySelectorAll("[data-skip");
const ranges = document.querySelectorAll(".player-slider");

let mouseDown = false;

function togglePlay() {
  video.paused ? video.play() : video.pause();
  if (video.paused) {
    playButton.innerText = "▶";
  } else {
    playButton.innerText = "❚❚";
  }
}

function handleRangeUpdate(e) {
  video[e.target.name] = e.target.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function position(e) {
  const coordX = e.offsetX / progress.offsetWidth;
  video.currentTime = coordX * video.duration;
}

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
playButton.addEventListener("click", togglePlay);
skipButtons.forEach((b) => {
  b.addEventListener("click", function () {
    video.currentTime += Number(this.dataset.skip);
  });
});

ranges.forEach((r) => r.addEventListener("change", handleRangeUpdate));
progress.addEventListener("click", position);
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
progress.addEventListener("mousemove", (e) => mouseDown && position(e));
