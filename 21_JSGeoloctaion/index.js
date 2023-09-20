navigator.geolocation.watchPosition((data) => {
  document.querySelector(
    "#long"
  ).textContent = `Longitude: ${data.coords.longitude}`;
  document.querySelector(
    "#lat"
  ).textContent = `Latitude: ${data.coords.latitude}`;
  document.querySelector("#speed").textContent = `Speed: ${Math.round(
    data.coords.speed
  )} m/s`;
  document.querySelector("img").style.transform = `rotate(${
    data.coords.heading || 10
  }deg)`;
});
