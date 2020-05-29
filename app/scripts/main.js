import $ from "jquery";
import "slick-carousel";

$(".testimonials-one .testimonials-one__slider-wrap").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".testimonials-two .testimonials-two__slider-wrap").slick({
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  // centerPadding: "250px",
  variableWidth: true,
  slidesToShow: 1,
});
