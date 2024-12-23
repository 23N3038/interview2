function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
  
  // Reveal hidden dialogues on scroll
  function revealOnScroll() {
    const hiddenElements = document.querySelectorAll('.dialogue.hidden');
    hiddenElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
        element.classList.remove('hidden');
      }
    });
  }
  
  // Add event listener for scrolling
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial call to reveal dialogues that might already be in the viewport
  revealOnScroll();