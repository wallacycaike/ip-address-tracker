export function showMap() {
  let map = L.map("map", {
    zoomControl: false,
  }).setView([51.505, -0.09], 19);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let markerIcon = L.icon({
    iconUrl: "assets/images/icon-location.svg",
  });

  L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);
}
