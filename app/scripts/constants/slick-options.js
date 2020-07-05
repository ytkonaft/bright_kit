const slickOptions = {
  testimonialsOne: {
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
  },
  testimonialsTwo: {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
  },
  team: {
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
  },
};

export default slickOptions;
