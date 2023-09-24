const button = document.getElementById("new-game");
const moles = document.querySelectorAll(".mole-container");
const scoreElement = document.getElementById("score");
const resultElement = document.getElementById("result");
let activeGame = false;
let index;
let roundIndex;
let lastMole;
//const times = [800, 1000, 1200, 1000, 1500, 2000];
const times = [2000, 2000, 2000, 2000, 2000, 2000];
let score = 0;

button.addEventListener("click", () => {
  newGame();
});

function newGame() {
  moles.forEach((m) => {
    const mole = m.childNodes[1];
    mole.style.transform = "translateY(100%)";
    mole.addEventListener("mousedown", handleMousedown);
  });
  score = 0;
  scoreElement.innerText = score;
  resultElement.innerText = "";
  button.innerText = "START WHACKIN'";
  clearTimeout(index);
  activeGame = true;
  setTimeout(() => {
    moleRound();
  }, 1000);

  index = setTimeout(() => {
    activeGame = false;
    clearTimeout(roundIndex);
    resultElement.innerText = "Time's up! You made it.";
    button.innerText = "WHACK SOME MORE";
  }, 21000);
}

function moleRound() {
  roundIndex && clearTimeout(roundIndex);
  const mole = selectMole();
  const time = times[Math.floor(Math.random() * times.length)];

  styleMoleUp(mole);
  roundIndex = setTimeout(() => {
    if (!activeGame) return;
    resultElement.innerText = "Game over! You missed it.";
    button.innerText = "WHACK SOME MORE";
    clearTimeout(index);
    activeGame = false;
  }, time);
}

function handleMousedown(e) {
  if (!activeGame) return;
  score++;
  scoreElement.innerText = score;
  styleMoleDown(e.target);
  setTimeout(() => moleRound(), 100);
  return;
}

function selectMole() {
  const index = Math.floor(Math.random() * moles.length);
  const mole = moles[index].childNodes[1];
  if (mole === lastMole) {
    return selectMole();
  }
  lastMole = mole;
  return mole;
}

function styleMoleUp(m) {
  m.style.transform = "translateY(0)";
}

function styleMoleDown(m) {
  m.style.transform = "translateY(100%)";
}
