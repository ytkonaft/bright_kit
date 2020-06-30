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

$(".testimonials-two .testimonials-two__slider-wrap").slick({
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
});

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

const navigationButton = document.getElementById("navigation-toggle-btn");

const navigationMenu = document.getElementById("navigation-menu");

const navigationButtonOff = document.getElementById("btn-nav-off");

const bodyWrap = document.getElementById("menu-overlay");

const body = document.getElementById("is-home");

const linkScroll = document.getElementById("anchor");

const horizontalMenu = document.getElementById("main-menu");

function toogleClassBtn(btnEvent) {
  return btnEvent.addEventListener("click", () => {
    navigationButton.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    bodyWrap.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
}

if (navigationButton) {
  toogleClassBtn(navigationButton);
}

if (navigationButtonOff) {
  toogleClassBtn(navigationButtonOff);
}

if (bodyWrap) {
  bodyWrap.addEventListener("click", () => {
    navigationMenu.classList.remove("active");
    bodyWrap.classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
}

function smoothScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

smoothScroll();

if (horizontalMenu) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      horizontalMenu.classList.add("active");
    } else {
      horizontalMenu.classList.remove("active");
    }
  });
}

if (linkScroll) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      linkScroll.classList.add("active");
    } else {
      linkScroll.classList.remove("active");
    }
  });
}
