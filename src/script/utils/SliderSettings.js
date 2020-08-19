export default function sliderSettings() {
  const Flickity = require('flickity');
  const contaiter = document.querySelector(".history__cards");
  const flkty = new Flickity(contaiter, {
    // options
    cellAlign: "center",
    freeScroll: true,
    wrapAround: true,

  });
}
