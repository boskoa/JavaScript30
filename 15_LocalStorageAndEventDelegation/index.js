const addItems = document.getElementById("add-items");
const itemsList = document.getElementById("items-list");
const items = [
  {
    text: "hai",
    done: true,
  },
  {
    text: "bai",
    done: false,
  },
];

function addItem(e) {
  e.preventDefault();
  const item = {
    text: e.target.item.value,
    done: false,
  };
  items.push(item);
  populateList();
  e.target.reset();
}

function populateList() {
  items.forEach((i, index) => {
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
  });
}

populateList();

addItems.addEventListener("submit", addItem);
