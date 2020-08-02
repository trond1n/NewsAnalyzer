import "../pages/about.css";
const Flickity = require('flickity');

const flkty = new Flickity('.history__cards', {
    freeScroll: true,
    wrapAround: true
});