import $ from "jquery";

function sliderTestiTwo() {
  $(".testimonials-two .testimonials-two__slider-wrap").slick({
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
  });
}

export default sliderTestiTwo;
