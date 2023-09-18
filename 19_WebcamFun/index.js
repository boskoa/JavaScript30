const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
const ghostingButton = document.getElementById("ghosting");
const redEffectButton = document.getElementById("red-effect");
const rgbSplitButton = document.getElementById("rgb-split");
const greenScreenButton = document.getElementById("green-screen");
const resetButton = document.getElementById("reset");
let ghosting = false;
let filterFunction = null;

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
        video.style.border = "2px solid red";
      };
    })
    .catch((error) => console.error("ERROR", error));
}

function paintToCanvas() {
  const width = video.videoWidth / 1.5;
  const height = video.videoHeight / 1.5;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    ctx.globalAlpha = ghosting ? 0.1 : 1;
    pixels = filterFunction ? filterFunction(pixels) : pixels;
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100;
    pixels.data[i + 1] -= 50;
    pixels.data[i + 2] *= 0.5;
  }

  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 300] = pixels.data[i];
    pixels.data[i + 200] = pixels.data[i + 1];
    pixels.data[i - 100] = pixels.data[i + 2];
  }

  return pixels;
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL("image/jpeg");
  const image = document.createElement("img");
  image.src = data;
  image.alt = "snapshot";
  console.log("IMG", image);
  strip.insertBefore(image, strip.firstChild);
}

getVideo();

video.addEventListener("canplay", paintToCanvas);
ghostingButton.addEventListener("click", () => {
  ghosting = !ghosting;
});
redEffectButton.addEventListener("click", () => {
  filterFunction = redEffect;
});
rgbSplitButton.addEventListener("click", () => {
  filterFunction = rgbSplit;
});
greenScreenButton.addEventListener("click", () => {
  filterFunction = greenScreen;
});
resetButton.addEventListener("click", () => {
  filterFunction = null;
});
