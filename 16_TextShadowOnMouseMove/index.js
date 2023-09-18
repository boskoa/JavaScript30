const container = document.getElementById("main");
const text = document.getElementById("woah");

function handleShadow(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    console.log("FOO");
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop - 177;
  }

  const moveX = (width - 2 * x) / 20;
  const moveY = (height - 2 * y) / 10;

  text.style.textShadow = `${moveX}px ${moveY}px ${
    (Math.abs(moveX) + Math.abs(moveY)) / 10
  }px rgba(0, 0, 0, ${1 - Math.abs(moveX / 100) - Math.abs(moveY / 100)})`;
}

container.addEventListener("mousemove", handleShadow);
