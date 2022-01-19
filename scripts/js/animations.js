// To install GSAP with plugins - npm install gsap@npm:@gsap/shockingly
// https://greensock.com/profile/75370-ex-jedi/content/?do=dashboard

// *==============================================================================
// ** Imports  **
// *==============================================================================

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';


// *=========================================
// ** GSAP  **
// *=========================================

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

// *=========================================
// ** Main Nav  **
// *=========================================

const mainNavTriggerWrapper = document.querySelector('.main-nav-trigger-wrapper');
const mainNavTrigger = document.querySelector('.main-nav-trigger');
const mainNav = document.querySelector('.main-nav');
const navLink = document.querySelectorAll('.main-nav-link');

// Restore pointerevents
function pointerEventsRestore() {
  mainNavTrigger.style.pointerEvents = 'auto';
  if (mainNav.dataset.state === 'open') {
    mainNavTrigger.textContent = 'CLOSE MENU';
    mainNavTrigger.style.padding = '0';
  } else {
    mainNavTrigger.textContent = 'MENU';
    mainNavTrigger.style.padding = '0 5rem';
    // Stripping out styles injected by GreenSock to show normal menu if screen is resized
    mainNav.removeAttribute('style');
    navLink.forEach((link) => link.removeAttribute('style'));
  }
}

// * Open menu

const openMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.out', duration: 1, delay: 0 },
});

openMenuTl
  .to(mainNav, { y: '0%' })
  .addLabel('colorChange', '-=0.3')
  .to(navLink, { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, 'colorChange')
  .to(mainNavTriggerWrapper, { backgroundColor: '#f4f1f0' }, 'colorChange')
  .to(mainNavTrigger, { color: '#6c9184', onComplete: pointerEventsRestore }, 'colorChange');

// * Close menu

const closeMenuTl = gsap.timeline({
  paused: true,
  defaults: { ease: 'power3.in', duration: 1, delay: 0 },
});

closeMenuTl
  .to(navLink, { y: 40, opacity: 0, stagger: -0.2, duration: 0.5 })
  .addLabel('colorChange', '-=0.5')
  .to(mainNavTriggerWrapper, { backgroundColor: '#6c9184' }, 'colorChange')
  .to(mainNavTrigger, { color: '#f4f1f0' }, 'colorChange')
  .to(mainNav, { y: '120%', onComplete: pointerEventsRestore }, 'colorChange');

function menuOpenerHandler() {
  if (mainNav.dataset.state === 'closed') {
    openMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'open';
  } else {
    closeMenuTl.restart();
    mainNavTrigger.style.pointerEvents = 'none';
    mainNav.dataset.state = 'closed';
  }
}

// *==============================================================================
// ** GSAP Animations For Multiple Pages  **
// *==============================================================================

// *=========================================
// ** Fading in paragraphs  **
// *=========================================

function fadeInRotateParagraphs() {
  // * Adding class to paragraphs created by Perch to set them up for fading in.
  // Grabbing paragraphs from multiple pages
  const aboutMeParagraphs = Array.from(document.querySelectorAll('.about-me-section p'));
  const servicesParagraphs = Array.from(document.querySelectorAll('.services-section p'));
  // Merge the paragraphs into one array
  const fadeInParagraph = [...aboutMeParagraphs, ...servicesParagraphs];
  // Add class to paragraphs
  fadeInParagraph.forEach((paragraph) => paragraph.classList.add('fade-in-rotate'));

  // Grabbing all paragraphs to fade in
  const fadeInParagraphs = gsap.utils.toArray('.fade-in-rotate');

  fadeInParagraphs.forEach((paragraph) => {
    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1100px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top 95%',
          end: 'bottom top',
        });
      },

      // Tablet
      '(max-width: 1099px) and (min-width: 700px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -100px',
        });
      },

      // Mobile
      '(max-width: 699px) and (min-width: 450px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -300px',
        });
      },

      // Small Mobile
      '(max-width: 449px)': function () {
        ScrollTrigger.create({
          trigger: paragraph,
          toggleClass: 'fade-in-rotate-reveal',
          start: 'top bottom',
          end: 'bottom -450px',
        });
      },
    });
  });
}

// *=========================================
// ** Contact form color change  **
// *=========================================

function scrollColourChange() {
  ScrollTrigger.create({
    trigger: '.general-contact-form-section',
    start: 'top center',
    end: 'bottom center',
    id: 'Contact Form',
    toggleClass: {
      targets: '.general-contact-form-section, .general-contact-form-input, .main-contact-submit-button',
      className: 'contact-form-colour-change',
    },
  });
}

// *==============================================================================
// ** Homepage  **
// *==============================================================================


ScrollTrigger.batch('.fade-in-rotate', {
  start: 'top 98%',
  markers: true,
  // interval: 0.1, // time window (in seconds) for batching to occur.
  // batchMax: 3,   // maximum batch size (targets)
  onEnter: (batch) => gsap.to(batch, { opacity: 1, rotateX: 0, ease: 'power1.in' }),
  onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, rotateX: 90, ease: 'power1.in' }),
  onEnterBack: (batch) => gsap.to(batch, { opacity: 1, rotateX: 0, ease: 'power1.in' }),
  // you can also define things like start, end, etc.
});

// ********** Homepage Parallax Image **********

function homepageParallax() {
  gsap.to('.parallax-image', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-image-section',
      start: 'top bottom',
      end: 'bottom',
      scrub: 0.5,
    },
  });
}

// *=========================================
// ** Exports  **
// *=========================================

export { homepageParallax, menuOpenerHandler, mainNavTrigger, scrollColourChange };
