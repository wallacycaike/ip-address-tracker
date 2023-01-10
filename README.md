# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./design/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS extension

### What I learned

This challenge helped me to practice and improve my API consumption skills.

This challenge was also essential to improve my skills with SASS.

I had some difficulties during the challenge of course, but looking for solutions in the documentation and on the internet I managed to complete it.

Consuming the geolocation API:

```js
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
```

### Useful resources

- [Leaflet](https://leafletjs.com/) - I used this to get the IP Address locations
- [IP Geolocation API](https://geo.ipify.org/) - I used this to generate the map

## Author

- My Projects - [GitHub](https://github.com/wallacycaike?tab=repositories)
- Frontend Mentor - [@wallacycaike](https://www.frontendmentor.io/profile/wallacycaike)
