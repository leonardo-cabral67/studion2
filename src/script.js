$(document).ready(() => {
  // MENU
  $('.navbar__menu-btn').on('click', function(){
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
  })

  // CAROUSEL
  const slickOptions = {
      autoplay: true,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
      nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>',
    }
  $('.slider').slick(slickOptions);
});