// scroll animation
// https://cssanimation.rocks/scroll-animations/
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var nav = document.querySelector("nav");
$('.navigation__item').on('click',()=>{
  $('#navi-toggle').prop("checked", false);
})
function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        console.log(element);
        if(!element.classList.contains('is-visible')){
          element.classList.add('is-visible');
        }
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
    console.log(el.getBoundingClientRect());
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

//filter projects
$('.project__filter').on( 'click', 'button', function() {
  const filterValue = $( this ).attr('data-filter');
  console.log(filterValue);
  //$('.element-item').find('.element-item--inactive').removeClass('element-item--inactive');
  $('.element-item').each((i,element) => {
    let $elementItem = $(element);
    console.log($elementItem.hasClass(filterValue));
    if(filterValue === "*"){
      $elementItem.show()
      $elementItem.removeClass('element-item--inactive');
    } else {
      if($elementItem.hasClass(filterValue)){
        $elementItem.show() 
        $elementItem.removeClass('element-item--inactive')
      } else {
        console.log("enter")
        if(!$elementItem.hasClass('element-item--inactive'))
        {
          $elementItem.addClass('element-item--inactive')
          setTimeout(function(){
            $elementItem.hide() 
          }, 200);
        }
      }
    }
    
  })
});
$('.project__filter').each( function( i, buttonGroup ) {
  let $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.button--active').removeClass('button--active');
    $( this ).addClass('button--active');
  });
});
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
loop();  