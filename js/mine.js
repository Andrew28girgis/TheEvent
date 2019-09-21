// navbar
$(window).scroll(function () { 
   if($(this).scrollTop() > 10 ) {
       $('nav').addClass('sticky');
   } else {
    $('nav').removeClass('sticky');
   }
});
// Back to top icon
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').on('click' , function () {
    $('html ,body').animate({scrollTop : 0} , 1500 , 'easeInOutExpo')
}) ;


// Initiate the wowjs animation library
new WOW().init();


 // Initialize Venobox
 $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });
  // Initiate superfish on nav menu
  $('.navbar-nav').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });
  
// Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });
  /// FAQ
  $('.collapsed i ').on('click' , function() 
  {
      
      $(this).toggleClass('fa fa-minus-circle');
      $(this).toggleClass('fas fa-plus-circle');
  })
$('#faq .faq-list a').on('click' , function()
{
    $(this).toggleClass('faq-color');    
}) 