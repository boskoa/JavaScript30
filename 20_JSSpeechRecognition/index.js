window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const paper = document.getElementById("paper");

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
paper.appendChild(p);

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((r) => r[0])
    .map((r) => r.transcript)
    .join();

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    paper.appendChild(p);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
