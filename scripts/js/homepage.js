// *==============================================================================
// ** Imports  **
// *==============================================================================

// TODO: Remove GSAP imports
import * as Flickity from 'flickity';
import 'flickity-imagesloaded';

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// ********** Flickity **********
const carousel = document.querySelector('.main-carousel');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 10000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});

// *==============================================================================
// ** Imported  **
// *==============================================================================

console.log('Hello');
