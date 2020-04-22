// scroll animation
// https://cssanimation.rocks/scroll-animations/
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};
var nav = document.querySelector("nav");
$('.navigation__item').on('click',()=>{
  $('#navi-toggle').prop("checked", false);
})
function loop() {
    var elementsToShow = document.querySelectorAll('.show-on-scroll');
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        if(!element.classList.contains('is-visible')){
          element.classList.add('is-visible');
          element.classList.remove('show-on-scroll');
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
loop();  