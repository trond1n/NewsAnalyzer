export default function sliderSettings() {
  const Flickity = require('flickity');
  const elem = document.querySelector(".history__cards");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "right",
    freeScroll: true,
    wrapAround: true,

  });
}
