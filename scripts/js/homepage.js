// *==============================================================================
// ** Imports  **
// *==============================================================================

// TODO: Minify
import * as Flickity from 'flickity';
import 'flickity-imagesloaded';

// *==============================================================================
// ** Page JS  **
// *==============================================================================

// ********** Flickity **********
const carousel = document.querySelector('.homepage-gallery');
const flkty = new Flickity(carousel, {
  imagesLoaded: true,
  autoPlay: 1000,
  prevNextButtons: false,
  wrapAround: true,
  selectedAttraction: 0.006,
  friction: 0.15,
});

// *==============================================================================
// ** Imported  **
// *==============================================================================
