// scroll animation
// https://cssanimation.rocks/scroll-animations/
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var nav = document.querySelector("nav");
function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    
    if($(window).scrollTop() > 0) {
        $('.nav__bg').removeClass('nav__bg--hidden');
        $('.nav__bg').addClass('nav__bg--visible');
      } else {
        $('.nav__bg').removeClass('nav__bg--visible');
        $('.nav__bg').addClass('nav__bg--hidden');
    }
    scroll(loop);
}
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
loop();  