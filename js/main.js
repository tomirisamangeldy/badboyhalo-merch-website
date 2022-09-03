$(document).ready(function(){
    $('.showcase-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        centerMode:true,
    });
  });

  $(document).ready(function(){
    $('.reviews-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        centerMode:true,
        arrows: false,
    });
  });