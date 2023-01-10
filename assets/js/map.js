let map = L.map("map", {
  zoomControl: false,
});

export function showMap(lat, lng) {
  map.setView([lat, lng], 19);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let markerIcon = L.icon({
    iconUrl: "assets/images/icon-location.svg",
  });

  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
}
