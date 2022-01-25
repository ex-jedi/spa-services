// *==============================================================================
// ** Imports  **
// *==============================================================================

// TODO: Minify
import * as Flickity from 'flickity';
import 'flickity-imagesloaded';
import { gsap } from 'gsap';
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

// *=========================================
// ** Nav Animation  **
// *=========================================

// Get nav elements
const navTrigger = document.querySelector('#main-nav-trigger');
const currentNav = document.querySelector('#main-nav-current');
const mainNav = document.querySelector('.main-nav');
console.log(mainNav);

// Prevent current nav clicks working
currentNav.addEventListener('click', (e) => e.preventDefault());

// Nav animation
navTrigger.addEventListener('click', () => alert('Click'));
