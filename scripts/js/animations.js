// To install GSAP with plugins - npm install gsap@npm:@gsap/shockingly
// https://greensock.com/profile/75370-ex-jedi/content/?do=dashboard

// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// *=========================================
// ** GSAP  **
// *=========================================

// TODO: Delete if not using
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// *=========================================
// ** Main Nav  **
// *=========================================

// Media query for menu
const mediaElevenHundred = window.matchMedia('(max-width: 1100px)');

// match media for nav animation timing
const mediaSevenFifty = window.matchMedia('(max-width: 750px)');

// Change trigger points on screen size
let navAnimDuration = 0.8;
if (mediaSevenFifty.matches) {
  navAnimDuration = 0.5;
}

// Nav elements
function getNavElements() {
  const mainNav = document.querySelector('.main-nav');
  const mainNavLinks = gsap.utils.toArray(document.querySelectorAll('.main-nav-link'));
  const mainNavTrigger = document.querySelector('.main-nav-trigger');
  const mainNavCloser = document.querySelector('.main-nav-closer');

  return { mainNav, mainNavLinks, mainNavTrigger, mainNavCloser };
}

// * Open Menu

function menuOpenAnimation(startPosition, endPosition) {
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();

  const openMenuTl = gsap.timeline({
    paused: true,
    // onComplete: navTextPointerEvents,
    defaults: { ease: 'power2.in', duration: navAnimDuration, delay: 0 },
  });

  return openMenuTl
    .addLabel('start')
    .fromTo(mainNav, startPosition, endPosition, 'start')
    .to(mainNavCloser, { rotate: 180 }, 'start')
    .to(mainNavLinks, { y: '0%', opacity: 1, stagger: 0.1 }, '-=25%');
}

function navOpenerHandler() {
  let beginning = { x: '-100%', y: 0 };
  let end = { x: '0%', y: '0%' };
  if (mediaElevenHundred.matches) {
    beginning = { x: '0%', y: '100%' };
    end = { y: '0%', x: '0%' };
  }
  menuOpenAnimation(beginning, end).play();
}

// * Close Menu

function closeMenuAnimation() {
  let endPosition = { x: '-100%', y: '0%' };
  if (mediaElevenHundred.matches) {
    endPosition = { y: '100%', x: '0%' };
  }
  const { mainNav, mainNavLinks, mainNavCloser } = getNavElements();
  const closeMenuTl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power2.out', duration: navAnimDuration, delay: 0 },
  });

  return closeMenuTl
    .to(mainNavLinks, { y: 100, opacity: 0, stagger: { each: 0.15, from: 'end' } })
    .addLabel('end')
    .to(mainNav, endPosition, 'end-=60%')
    .to(mainNavCloser, { rotate: -180 }, 'end-=60%');
}

function navCloserHandler() {
  closeMenuAnimation().play();
}

function addMenuListener() {
  const { mainNavTrigger, mainNavCloser } = getNavElements();
  mainNavTrigger.addEventListener('click', navOpenerHandler);
  mainNavCloser.addEventListener('click', navCloserHandler);
}

// *=========================================
// ** Simple Fade Up  **
// *=========================================

function simpleFadeUp() {
  const fadeUp = gsap.utils.toArray(document.querySelectorAll('.simple-fade-up'));
  console.log(fadeUp);

  fadeUp.forEach((elem) => {
    gsap.set(elem, { opacity: 0, y: 40 });
    ScrollTrigger.create({
      trigger: elem,
      start: 'top 70%',
      end: 'bottom 10%',
      once: true,
      id: 'Simple Fade Up',
      markers: true,
      onEnter: () => gsap.to(elem, { delay: 0.2, opacity: 1, y: 0, duration: 0.5 }),
    });
  });
}

function simpleFadeRight() {
  const fadeRight = gsap.utils.toArray(document.querySelectorAll('.simple-fade-right'));
  console.log(fadeRight);

  fadeRight.forEach((elem) => {
    gsap.set(elem, { opacity: 0, x: -40 });
    ScrollTrigger.create({
      trigger: elem,
      start: 'top 80%',
      end: 'bottom 20%',
      once: true,
      id: 'Simple Fade Up',
      markers: true,
      onEnter: () => gsap.to(elem, { delay: 0.2, opacity: 1, x: 0, duration: 0.5 }),
    });
  });
}

simpleFadeRight();
simpleFadeUp();
// *=========================================
// ** Exports  **
// *=========================================

export { addMenuListener };
