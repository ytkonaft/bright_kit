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

function teamArrow(arrowClass, iconClass) {
  const arrowCollection = document.getElementsByClassName(arrowClass);
  const arrow = arrowCollection.item(0);
  const arrowArray = Array.from(arrowCollection);
  arrowArray.forEach((itm) => {
    itm.innerHTML = `<i class='${iconClass}'></i>`;
  });
}
teamArrow("slick-prev", "icon-chevron-back");
teamArrow("slick-next", "icon-chevron-forward");
