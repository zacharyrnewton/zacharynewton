//CTA Toggle
$('.mainCTAWrapper, .closeCTA').on('click', function(){
  $('html').toggleClass('CTAopen');
});

//Typed JS
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 100,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});
