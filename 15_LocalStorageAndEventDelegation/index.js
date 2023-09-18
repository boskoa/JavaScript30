const addItems = document.getElementById("add-items");
const itemsList = document.getElementById("items-list");
const clearAll = document.getElementById("clear-all");
const checkAll = document.getElementById("check-all");
const uncheckAll = document.getElementById("uncheck-all");
let items =
  JSON.parse(window.localStorage.getItem("JS30_15_LocalStorage")) || [];

function addItem(e) {
  e.preventDefault();
  const item = {
    text: e.target.item.value,
    done: false,
  };
  const id = items.length;
  items.push(item);
  createElement(item, id);
  e.target.reset();
}

function createElement(i, index) {
  const loading = document.getElementById("start");
  loading?.remove();
  const newSpan = document.createElement("span");
  newSpan.innerText = i.text;
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.checked = i.done;
  newCheckbox.id = index;
  const newLabel = document.createElement("label");
  newLabel.appendChild(newCheckbox);
  newLabel.appendChild(newSpan);
  const newItem = document.createElement("li");
  newItem.appendChild(newLabel);
  itemsList.appendChild(newItem);
  window.localStorage.setItem("JS30_15_LocalStorage", JSON.stringify(items));
}

function populateList() {
  items.forEach((i, index) => {
    createElement(i, index);
  });
}

function handleToggle(e) {
  if (!e.target.matches("input")) return;
  const checkbox = items[Number(e.target.id)];
  checkbox.done = !checkbox.done;
  window.localStorage.setItem("JS30_15_LocalStorage", JSON.stringify(items));
}

itemsList.addEventListener("click", handleToggle);

clearAll.addEventListener("click", () => {
  items = [];
  itemsList.innerHTML = "<li id='start'>Loading tapas...</li>";
  populateList();
  window.localStorage.removeItem("JS30_15_LocalStorage");
});

checkAll.addEventListener("click", () => {
  items.forEach((i) => {
    i.done = true;
  });
  itemsList.innerHTML = "";
  populateList();
  window.localStorage.setItem("JS30_15_LocalStorage", JSON.stringify(items));
});

uncheckAll.addEventListener("click", () => {
  items.forEach((i) => {
    i.done = false;
  });
  itemsList.innerHTML = "";
  console.log("ITEMS", items, itemsList);
  populateList();
  window.localStorage.setItem("JS30_15_LocalStorage", JSON.stringify(items));
});

populateList();
console.log("START", itemsList.innerHTML);
addItems.addEventListener("submit", addItem);
