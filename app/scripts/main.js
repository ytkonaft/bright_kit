import $ from "jquery";
import "slick-carousel";

const sliderSlick = [
  ".testimonials-one .testimonials-one__slider-wrap",
  ".features-one .features-one__slider-wrap",
].join();

$(sliderSlick).slick({
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
