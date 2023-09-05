const paragraph = document.getElementsByTagName("p")[0];

function makeGreen() {
  paragraph.style = "color: #ad1da5; font-size: 50px;";
}

const guy = "MARK";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

// Regular
console.log("HAI MARK");

// Interpolated
console.log(`HAI ${guy}`);

// Styled
console.log("%cHAI MARK", "color: red; text-shadow: 1px 1px 3px white");

// warning!
console.warn("YOU ARE TEARING ME APART");

// Error :|
console.error("YOU ARE LYING I NEVER HIT YOU");

// Info
console.info("YOU'RE MY BEST FRIEND");

// Testing
console.assert(paragraph.classList.contains("room"), "GREATEST MOVIE");

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(paragraph);

// Grouping together
dogs.forEach((d) => {
  console.groupCollapsed(d.name);
  console.info("This is", d.name);
  console.info("He is", d.age, "years old");
  console.groupEnd(d.name);
});

// counting
console.count("MARK");
console.count("MARK");
console.count("TOMMY");
console.count("MARK");
console.count("MARK");
console.count("TOMMY");

// timing
console.time("calculating...");
for (let i = 0; i < 100000; i++) {
  i ** i;
}
console.timeEnd("calculating...");

// table
console.table(dogs);
