import $ from "jquery";

function sliderTeam() {
  $(".team-two .team-two__slider-wrap").slick({
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow:
      "<button class='slick-prev'><i class='icon-chevron-back'></i></button>",
    nextArrow:
      "<button class='slick-next'><i class='icon-chevron-forward'></i></button>",
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
}

export default sliderTeam;
