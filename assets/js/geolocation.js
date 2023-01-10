export async function getGeolocation(ipAddress) {
  if (ipAddress === undefined) {
    ipAddress = "";
  }

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_YbLyCSaYvy0TvIgQf7b5llqsDVCVm&domain=${ipAddress}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status ${response.status}`);
  } else {
    const geolocation = await response.json();
    return geolocation;
  }
}

const ip = document.querySelector("#show-ip");
const location = document.querySelector("#show-location");
const timezone = document.querySelector("#show-timezone");
const isp = document.querySelector("#show-isp");

export function showGeolocation(geolocation) {
  ip.textContent = geolocation.ip;
  location.textContent = `${geolocation.location.region}, ${geolocation.location.country}`;
  timezone.textContent = `UTC${geolocation.location.timezone}`;
  isp.textContent = geolocation.isp;
}
