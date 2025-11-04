// Portfolio Interactive Features
(function(){
  'use strict';
  
  // ============================================
  // MOBILE MENU FUNCTIONALITY
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  const navClose = document.getElementById('navClose');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;
  
  // Debug log
  console.log('Menu initialized:', {
    hamburger: !!hamburger,
    mainNav: !!mainNav,
    navClose: !!navClose,
    overlay: !!overlay,
    navLinksCount: navLinks.length
  });
  
  // Toggle menu function
  function toggleMenu() {
    console.log('Toggle menu called');
    const isActive = hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
    console.log('Menu active:', isActive);
    
    // Prevent body scroll when menu is open
    body.style.overflow = isActive ? 'hidden' : '';
  }
  
  // Close menu function
  function closeMenu() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }
  
  // Hamburger button click
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });
  }
  
  // Close button click
  if (navClose) {
    navClose.addEventListener('click', function(e) {
      e.preventDefault();
      closeMenu();
    });
  }
  
  // Overlay click - close menu
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  // Nav link clicks - close menu and smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      closeMenu();
      
      // Smooth scroll to section
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          setTimeout(() => {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300);
        }
      }
    });
  });
  
  // Close menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  // Close menu on window resize (if going back to desktop)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
        closeMenu();
      }
    }, 250);
  });
  
  // ============================================
  // SCROLL TO TOP BUTTON
  // ============================================
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ============================================
  // SCROLL REVEAL ANIMATION FOR CARDS
  // ============================================
  const cards = Array.from(document.querySelectorAll('.projects .grid .card'));

  const DEBUG = true; // set to false to disable logs

  function initReveal(){
    if(!cards.length) return;

    if(!('IntersectionObserver' in window)){
      cards.forEach(c=>c.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el = entry.target;
          const idx = cards.indexOf(el);
          const delay = Math.min(700, 60 * (idx % 10));
          if(DEBUG){
            const title = el.querySelector('h3') ? el.querySelector('h3').textContent.trim() : ('#' + idx);
            console.debug('[reveal] observed:', idx, 'title:', title, 'delay:', delay + 'ms');
          }
          el.style.animationDelay = delay + 'ms';
          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      });
    },{threshold:0.01});

    // Check each card: if it's already in the viewport, reveal now; otherwise observe it.
    cards.forEach((c, idx)=>{
      const rect = c.getBoundingClientRect();
      const inViewportOnLoad = rect.top < window.innerHeight && rect.bottom > 0;
      const title = c.querySelector('h3') ? c.querySelector('h3').textContent.trim() : ('#' + idx);
      if(inViewportOnLoad){
        const delay = Math.min(700, 60 * (idx % 10));
        if(DEBUG) console.debug('[reveal] inViewportOnLoad:', idx, 'title:', title, 'delay:', delay + 'ms');
        c.style.animationDelay = delay + 'ms';
        c.classList.add('is-visible');
      } else {
        if(DEBUG) console.debug('[reveal] observing:', idx, 'title:', title);
        observer.observe(c);
      }
    });
  }

  // Wait for fonts and load to settle layout (prevents wrong rects on slow font load)
  function whenReady(fn){
    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(()=>{
        // give a small tick for layout
        requestAnimationFrame(()=>requestAnimationFrame(fn));
      }).catch(()=>{
        setTimeout(fn,120);
      });
    } else {
      // fallback: run on load event
      if(document.readyState === 'complete'){
        setTimeout(fn,60);
      } else {
        window.addEventListener('load', ()=>setTimeout(fn,60));
      }
    }
  }

  whenReady(initReveal);

  // Also re-run on resize/orientationchange to reveal items that become visible after layout change
  let resizeTO;
  window.addEventListener('resize', ()=>{
    clearTimeout(resizeTO);
    resizeTO = setTimeout(()=>initReveal(), 150);
  });
  window.addEventListener('orientationchange', ()=>setTimeout(()=>initReveal(), 120));

})();
