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

function toggleClassBtn(btnEvent) {
  return btnEvent.addEventListener("click", () => {
    navigationButton.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    bodyWrap.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
}

if (navigationButton) {
  toggleClassBtn(navigationButton);
}

if (navigationButtonOff) {
  toggleClassBtn(navigationButtonOff);
}

if (bodyWrap) {
  bodyWrap.addEventListener("click", () => {
    navigationMenu.classList.remove("active");
    bodyWrap.classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
}

function smoothScroll() {
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
const anchors = document.querySelectorAll('a[href*="#"]');

if (anchors.length > 0) {
  smoothScroll(anchors);
}

function setScrollListener(elem, activeClass, startPosition) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > startPosition) {
      elem.classList.add(activeClass);
    } else {
      elem.classList.remove(activeClass);
    }
  });
}

if (horizontalMenu) {
  setScrollListener(horizontalMenu, "active", 0);
  setScrollListener(linkScroll, "active", 400);
}

if (horizontalMenuTwo) {
  setScrollListener(horizontalMenuTwo, "active", 0);
  setScrollListener(linkScrollTwo, "active", 400);
}

function eventSubmit(elem) {
  elem.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetForm = event.target;
    const name = targetForm.querySelector('[name="name"]').value;
    const email = targetForm.querySelector('[name="email"]').value;
    const message = targetForm.querySelector('[name="message"]').value;
    console.log({ name, email, message });
  });
}

const form = document.getElementById("form");

if (form) {
  eventSubmit(form);
}

function btnDisabled(elem, btn) {
  elem.addEventListener("change", (event) => {
    if (event.target.checked) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });
}

const checkbox = document.getElementById("checkbox");
const sendBtn = document.getElementById("btn-send");

if (checkbox) {
  btnDisabled(checkbox, sendBtn);
}

function eventChange(elem) {
  elem.addEventListener("change", (event) => {
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
        priceElem.innerHTML = multiply;
      } else {
        priceElem.innerHTML = division;
      }
    });
  });
}

const check = document.getElementById("check");

if (check) {
  eventChange(check);
}
