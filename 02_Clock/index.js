const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const hourDisplay = document.getElementById("hours");
const minuteDisplay = document.getElementById("minutes");
const secondDisplay = document.getElementById("seconds");

setInterval(() => {
  const newDate = new Date();
  const secondRotate = newDate.getSeconds() * 6 + 90;
  const minuteRotate =
    newDate.getMinutes() * 6 + 90 + (newDate.getSeconds() / 60) * 6;
  const hourRotate =
    (newDate.getHours() % 12) * 30 + 90 + (newDate.getMinutes() / 60) * 30;

  hour.style.transform = `rotate(${hourRotate}deg)`;
  hourDisplay.style.transform = `rotate(${0 - hourRotate}deg)`;
  hourDisplay.innerText = newDate.getHours();
  minute.style.transform = `rotate(${minuteRotate}deg)`;
  minuteDisplay.style.transform = `rotate(${0 - minuteRotate}deg)`;
  minuteDisplay.innerText = newDate.getMinutes();
  second.style.transform = `rotate(${secondRotate}deg)`;
  secondDisplay.style.transform = `rotate(${0 - secondRotate}deg)`;
  secondDisplay.innerText = newDate.getSeconds();

  document.getElementById("clock").style.boxShadow =
    "0 0 60px 0 rgb(234, 28, 234)";
  setTimeout(
    () => (document.getElementById("clock").style.boxShadow = "none"),
    500
  );

  if (newDate.getSeconds() === 0) {
    second.style.transition = "none";
    setTimeout(() => (second.style.transition = "all 0.3s"), 300);
  }

  if (newDate.getMinutes() === 0) {
    minute.style.transition = "none";
    setTimeout(() => (minute.style.transition = "all 0.3s"), 300);
  }

  if (newDate.getHours() === 0) {
    hour.style.transition = "none";
    setTimeout(() => (hour.style.transition = "all 0.3s"), 300);
  }
}, 1000);
