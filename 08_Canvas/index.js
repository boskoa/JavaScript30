const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 69;
ctx.strokeStyle = "#ff0000";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
const reset = document.getElementsByTagName("button")[0];

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let widthDirection = 1;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 2) {
    widthDirection = widthDirection * -1;
  }

  ctx.lineWidth = ctx.lineWidth + 0.5 * widthDirection;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousemove", (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
});

reset.addEventListener("click", () => {
  hue = 0;
  widthDirection = 1;
  ctx.lineWidth = 5;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
