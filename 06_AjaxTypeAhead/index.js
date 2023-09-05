let data = [];
const results = document.getElementById("results-container");

fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((r) => r.json())
  .then((r) => {
    data = [...r];
  });

function searchData(e) {
  if (!e.target.value) {
    return;
  }
  const re = new RegExp(e.target.value, "ig");
  const results = data.filter((d) => d.city.match(re) || d.state.match(re));
  return results;
}

setTimeout(() => {
  document.getElementById("search").addEventListener("keyup", (e) => {
    const hits = searchData(e);
    results.innerHTML = "";
    if (!hits) {
      return;
    }
    hits.forEach((h) => {
      const newElement = document.createElement("div");
      newElement.innerText = `${h.city}, ${h.state}`;
      const spanElement = document.createElement("span");
      spanElement.innerText = new Intl.NumberFormat("en-US").format(
        h.population
      );
      newElement.classList.add("hits");
      newElement.appendChild(spanElement);
      results.appendChild(newElement);
    });
  });
}, 0);
