const total = document.getElementById("total-time");
const times = document.querySelectorAll("[data-time]");

function calculateTotal() {
  const lengthInSeconds = [...times].reduce((total, item) => {
    const itemArray = item.dataset.time.split(":");
    const inSeconds = Number(itemArray[0]) * 60 + Number(itemArray[1]);
    return total + inSeconds;
  }, 0);

  return `${Math.floor(lengthInSeconds / 3600)
    .toString()
    .padStart(2, "0")}:${Math.floor((lengthInSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${(lengthInSeconds % 60).toString().padStart(2, "0")}`;
}

total.innerText = `Total time - ${calculateTotal()}`;
