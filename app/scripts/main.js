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

const teamSlider = ".team-two .team-two__slider-wrap";

$(teamSlider).slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const teamArrowPrev = document.getElementsByClassName("slick-prev");
const arrowLeft = teamArrowPrev.item(0);
arrowLeft.innerHTML = "<i></i>";

const colectionArrowLeft = arrowLeft.getElementsByTagName("i");
const teamArrowLeft = colectionArrowLeft.item(0);
teamArrowLeft.classList.add("icon-chevron-back");

const teamArrowNext = document.getElementsByClassName("slick-next");
const arrowRight = teamArrowNext.item(0);
arrowRight.innerHTML = "<i></i>";

const colectionArrowRight = arrowRight.getElementsByTagName("i");
const teamArrowRight = colectionArrowRight.item(0);
teamArrowRight.classList.add("icon-chevron-forward");
