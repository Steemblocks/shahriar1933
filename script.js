// Theme toggle and scroll reveal (non-hallucinated, local-only behavior)
(function(){
  // Scroll reveal using IntersectionObserver; stagger by index
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
