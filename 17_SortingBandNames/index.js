const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const bandsList = document.getElementById("bands");

function populateList(list) {
  bandsList.innerHTML = "";
  list.forEach((item, index) => {
    const newItem = document.createElement("li");
    newItem.innerText = item;
    newItem.key = index;
    bandsList.appendChild(newItem);
  });
}

function trim(list) {
  const trimmed = list.map((item) => {
    const itemArray = item.split(" ");
    if (["the", "a", "an"].includes(itemArray[0].toLowerCase())) {
      const first = itemArray.shift();
      return [...itemArray, first];
    } else {
      return itemArray;
    }
  });

  return trimmed;
}

function sortAlpha(list) {
  list.sort();
  list = list.map((item) => {
    if (["the", "a", "an"].includes(item[item.length - 1].toLowerCase())) {
      const last = item.pop();
      return [last, ...item].join(" ");
    } else {
      return [...item].join(" ");
    }
  });

  return list;
}

populateList(bands);

document
  .getElementById("original")
  .addEventListener("click", () => populateList(bands));

document
  .getElementById("sort")
  .addEventListener("click", () => populateList(sortAlpha(trim(bands))));

document
  .getElementById("reverse")
  .addEventListener("click", () =>
    populateList(sortAlpha(trim(bands)).reverse())
  );
