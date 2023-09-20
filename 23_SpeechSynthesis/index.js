const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.getElementById("speak");
const stopButton = document.getElementById("stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .map((v) => `<option value="${v.name}">${v.name} ${v.lang}</option>`)
    .join("");
  voicesDropdown.innerHTML = voiceOptions;
}

function voiceChange(e) {
  const newVoice = voices.find((v) => v.name === e.target.value);
  msg.voice = newVoice;
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  startOver && speechSynthesis.speak(msg);
}

function handleOption(e) {
  msg[e.target.name] = e.target.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", voiceChange);
options.forEach((o) => o.addEventListener("change", handleOption));
speakButton.addEventListener("click", () => toggle());
stopButton.addEventListener("click", () => toggle(false));
