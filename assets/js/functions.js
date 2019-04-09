//CTA Toggle
$('.mainCTAWrapper, .closeCTA, .contact').on('click', function(){
  $('html').toggleClass('CTAopen');
});

$('.navigation-toggle, .nav-items').on('click', function(){
  $('body').toggleClass('navigation-active');
});
