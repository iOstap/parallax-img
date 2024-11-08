document.addEventListener('DOMContentLoaded', function() {
  const parallaxElements = document.querySelectorAll('.parallax');

  if (parallaxElements.length > 0) {
    parallaxElements.forEach(function(parallaxElement) {
      if (parallaxElement.complete) {
        initializeParallax(parallaxElement);
      } else {
        parallaxElement.addEventListener('load', function() {
          initializeParallax(parallaxElement);
        });
      }
    });
  }
});

function initializeParallax(element) {
  new Ukiyo(element, {
    scale: 1.2,
    speed: 1.2,
    willChange: true,
    externalRAF: false
  });
  element.style.zIndex = '1';
}
