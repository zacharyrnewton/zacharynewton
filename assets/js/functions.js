//Nav Scrolled Style Switch
$(window).on("load resize scroll",function(e){
  var y = window.scrollY
  if (y < 1) {
    $('nav').removeClass('scrolled');
  } else {
    $('nav').addClass('scrolled');
  }
});

//CTA Toggle
$('.mainCTAWrapper, .closeCTA, .contact').on('click', function(){
  $('html').toggleClass('CTAopen');
});

$('.navigation-toggle, .nav-items').on('click', function(){
  $('body').toggleClass('navigation-active');
});
