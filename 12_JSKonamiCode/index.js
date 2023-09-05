const pressed = [];
const secretCode = "haimark";
let index = 0;

window.addEventListener("keyup", (e) => {
  if (e.key === secretCode[index]) {
    pressed.push(e.key);
    index++;
  } else {
    index = 0;
    pressed.splice(0, pressed.length);
  }

  if (pressed.join("") === secretCode) {
    cornify_add();
    index = 0;
    pressed.splice(0, pressed.length);
  }
});
