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

const linkScrollTwo = document.getElementById("is-anchor");

const horizontalMenu = document.getElementById("main-menu");

const horizontalMenuTwo = document.getElementById("head-menu");

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
  if (body) {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
}

smoothScroll();

function pageScroll(elem, link) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
    if (window.scrollY >= 400) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

if (horizontalMenu) {
  pageScroll(horizontalMenu, linkScroll);
}

if (horizontalMenuTwo) {
  pageScroll(horizontalMenuTwo, linkScrollTwo);
}

const checkbox = document.getElementById("checkbox");
const sendBtn = document.getElementById("btn-send");

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    sendBtn.removeAttribute("disabled");
  } else {
    sendBtn.setAttribute("disabled", true);
  }
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const targetForm = event.target;
  const name = targetForm.querySelector('[name="name"]');
  const email = targetForm.querySelector('[name="email"]');
  const message = targetForm.querySelector('[name="message"]');
  console.log(name.value, email.value, message.value);
});

const check = document.getElementById("check");

check.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  const mult = event.target.value;
  const elementsIds = event.target.getAttribute("data-for");
  const idsArray = elementsIds.split(",").map((itm) => itm.trim());
  idsArray.forEach((id) => {
    const priceElem = document.getElementById(id);
    const initValue = priceElem.innerHTML;
    const multiply = parseInt(initValue) * mult;
    const division = parseInt(initValue) / mult;

    if (isChecked) {
      priceElem.innerHTML = multiply; //промлемы с символом $
    } else {
      priceElem.innerHTML = division;
    }
  });
});
