const timeLeft = document.getElementById("time-left");
const backAt = document.getElementById("back-at");
const secs20 = document.getElementById("20secs");
const work5 = document.getElementById("work5");
const quick15 = document.getElementById("quick15");
const snack20 = document.getElementById("snack20");
const lunch = document.getElementById("lunch");
const custom = document.getElementById("custom");

let timer;
let index;

function setTimer(time) {
  clearInterval(index);
  const backAtTime = new Date(Date.now() + time * 1000);
  const backAtString = `Be back at ${backAtTime.getHours()}:${backAtTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  backAt.innerText = backAtString;
  let countDown = time;
  timeLeft.innerText = `${Math.floor(countDown / 60)}:${(countDown % 60)
    .toString()
    .padStart(2, "0")}`;
  timeLeft.style.textShadow = "none";

  index = setInterval(() => {
    countDown = Math.round((backAtTime - Date.now()) / 1000);
    const minutes = Math.floor(countDown / 60);
    const seconds = (countDown % 60).toString().padStart(2, "0");
    timeLeft.innerText = document.title =
      countDown < 0 ? "Get your ass back to work!" : `${minutes}:${seconds}`;
    if (countDown < 10 && countDown >= 0) {
      timeLeft.style.textShadow = "0 0 10px red";
    }
    if (countDown < 0) {
      document.title = "Countdown Timer";
      return clearInterval(index);
    }
  }, 1000);
}

secs20.addEventListener("click", () => setTimer(20));
work5.addEventListener("click", () => setTimer(5 * 60));
quick15.addEventListener("click", () => setTimer(15 * 60));
snack20.addEventListener("click", () => setTimer(20 * 60));
lunch.addEventListener("click", () => setTimer(30 * 60));
custom.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  if (isNaN(e.target.value)) {
    e.target.value = "";
    return;
  }
  setTimer(e.target.value * 60);
  e.target.value = "";
});
