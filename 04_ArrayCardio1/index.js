const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter(
  (i) => i.year >= 1500 && i.year < 1600
);
console.log("born in the 1500's", filteredInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const namedInventors = inventors.map((i) => [i.first, i.last]);
console.log("inventors first and last names", namedInventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.log("inventors by birthdate, oldest to youngest", sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumYears = inventors.reduce((p, c) => p + (c.passed - c.year), 0);
console.log("years inventors lived all together", sumYears);

// 5. Sort the inventors by years lived
const longestLivingInventors = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.log("inventors by years lived", longestLivingInventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/* needs jsdom
const page = fetch("https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris")
  .then((r) => r.text())
  .then((r) => {
    let boulevards = [];
    const dom = new JSDOM(r);
    const links = dom.window.document.querySelectorAll(".mw-category-group a");
    links.forEach((l) => boulevards.push(l.innerText));
    const deBoulevards = boulevards.filter((b) => b.includes("de "));
    console.log("de Boulevards", deBoulevards);
  })
  .catch((e) => console.log(e));
  */

// 7. sort Exercise
// Sort the people alphabetically by last name
const inventorNames = inventors.map((i) => `${i.last}, ${i.first}`);
const sortedNames = inventorNames.sort();
console.log("people alphabetically by last name", sortedNames);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const instances = data.reduce((p, c) => {
  if (p[c]) {
    p[c]++;
  } else {
    p[c] = 1;
  }
  return p;
}, {});
console.log("instances of each of items", instances);
