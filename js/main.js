import '../css/style.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitType from 'split-type';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// --- 1. Smooth Scroll (Lenis) ---
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// --- 2. Custom Cursor ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // Dot follows instantly
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Outline follows with delay (using GSAP for smoothness)
  gsap.to(cursorOutline, {
    x: posX,
    y: posY,
    duration: 0.15,
    ease: 'power2.out'
  });
});

// Cursor Hover Effects
const hoverTargets = document.querySelectorAll('a, button, .menu-toggle, .service-item');

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursorOutline, {
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 0,
      duration: 0.2
    });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to(cursorOutline, {
      scale: 1,
      backgroundColor: 'transparent',
      borderWidth: '1px',
      duration: 0.2
    });
  });
});

// --- 3. Text Animations (Split Type) ---
// Initialize SplitType on elements with class 'split-text'
const splitTypes = document.querySelectorAll('.split-text');

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: 'lines, words' });
  
  // Wrap lines in a container for overflow hidden effect
  // Note: SplitType creates .line elements. We need to animate their children or themselves.
  // A common technique is to wrap the content of line in another div, but for simplicity with GSAP:
  
  gsap.from(text.words, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.05,
    ease: 'power4.out'
  });
});

// Simple Reveal for other elements
const revealElements = document.querySelectorAll('.reveal-text');

revealElements.forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
});

// --- 4. Parallax Images ---
const parallaxImages = document.querySelectorAll('.parallax-img');

parallaxImages.forEach(img => {
  gsap.to(img, {
    y: '20%', // Move image down within its container
    ease: 'none',
    scrollTrigger: {
      trigger: img.parentElement,
      start: 'top bottom', // Start when container enters viewport
      end: 'bottom top',   // End when container leaves viewport
      scrub: true
    }
  });
});

// --- 5. Menu Logic ---
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-links a');

const tlMenu = gsap.timeline({ paused: true });

tlMenu.to(menuOverlay, {
  opacity: 1,
  duration: 0.5,
  ease: 'power2.inOut',
  onStart: () => { menuOverlay.classList.add('active'); },
  onReverseComplete: () => { menuOverlay.classList.remove('active'); }
});

tlMenu.to(menuLinks, {
  y: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power4.out'
}, "-=0.3");

menuToggle.addEventListener('click', () => {
  tlMenu.play();
});

menuClose.addEventListener('click', () => {
  tlMenu.reverse();
});

// Close menu on link click
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    tlMenu.reverse();
  });
});
