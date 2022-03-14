$(document).ready(function() {


// scrollit

$.scrollIt();

// preloader

$(window).on('load', function () {
  $('.preloader').fadeOut();
});

// menu fixed

  $(window).on('scroll', function() {

    let scrollTop = $(this).scrollTop();

    if (scrollTop > 30) {
      $('.navbar').addClass('nav-fixed');
    } 
    else {
      $('.navbar').removeClass('nav-fixed');
    }
  });


// back to top

$(window).on('scroll', function () {

  let scrollTop = $(this).scrollTop();
  
  if (scrollTop > 200) {
    $('.back-to-top').fadeIn();
  } 
  else {
    $('.back-to-top').fadeOut();
  }
});

$('.back-to-top').on('click', function () {

  $('html, body').animate({
    scrollTop: 0,
  });

});


// active menu

  $('.nav-link').on('click', function() {
    $('.navbar').find('.active').removeClass('active');
    $(this).addClass("active");
  });


// banner slider

  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
      },
    ]
  });


// testimoial slider

  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
    ]  
  });


// profile counter

  $('.count').counterUp({
    delay: 20,
    time: 1000
  });
      





});