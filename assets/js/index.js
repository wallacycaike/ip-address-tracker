import { getGeolocation, showGeolocation } from "./geolocation.js";
import { showMap } from "./map.js";

try {
  const geolocation = await getGeolocation();
  const geolocationLat = geolocation.location.lat;
  const geolocationLng = geolocation.location.lng;

  showMap(geolocationLat, geolocationLng);
  showGeolocation(geolocation);
} catch (error) {
  console.log(error.message);
}

const searchInput = document.querySelector("#ip-input");
const searchBtn = document.querySelector(".search-btn");

searchInput.addEventListener("keydown", async (ev) => {
  if (ev.key === "Enter") {
    try {
      const geolocation = await getGeolocation(searchInput.value);
      showMap(geolocation.location.lat, geolocation.location.lng);
      showGeolocation(geolocation);
      searchInput.classList.remove("error");
      searchInput.value = "";
    } catch (error) {
      console.log(error.message);
      searchInput.classList.add("error");
      searchInput.value = "";
    }
  }
});

searchBtn.addEventListener("click", async () => {
  try {
    const geolocation = await getGeolocation(searchInput.value);
    showMap(geolocation.location.lat, geolocation.location.lng);
    showGeolocation(geolocation);
    searchInput.classList.remove("error");
    searchInput.value = "";
  } catch (error) {
    console.log(error.message);
    searchInput.classList.add("error");
    searchInput.value = "";
  }
});
