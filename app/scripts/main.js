import $ from "jquery";
import "slick-carousel";

import toggleClassBtn from "./toggle-class-btn";
import addClassBtn from "./add-class-btn";
import removeClassBody from "./remove-class-body";
import smoothScroll from "./smooth-scroll";
import setScrollListener from "./set-scroll-listener";
import eventSubmit from "./event-submit";
import btnDisabled from "./btn-disabled";
import eventChange from "./event-change";
import sliderTestiOne from "./slider-slick-testimonials-one";
import sliderTestiTwo from "./slider-slick-testimonials-two";
import sliderTeam from "./slider-slick-team";

const sliderSlick = [
  ".testimonials-one .testimonials-one__slider-wrap",
  ".features-one .features-one__slider-wrap",
].join();

sliderTestiOne(sliderSlick);

sliderTestiTwo();

sliderTeam();

const navigationButton = document.getElementById("navigation-toggle-btn");

const navigationMenu = document.getElementById("navigation-menu");

const navigationButtonOff = document.getElementById("btn-nav-off");

const bodyWrap = document.getElementById("menu-overlay");

const body = document.getElementById("is-home");

if (navigationButton) {
  addClassBtn(navigationButton, navigationMenu, bodyWrap, body);
}

if (navigationButtonOff) {
  toggleClassBtn(
    navigationButtonOff,
    navigationButton,
    navigationMenu,
    bodyWrap,
    body
  );
}

if (bodyWrap) {
  removeClassBody(bodyWrap, navigationMenu, body);
}

const anchors = document.querySelectorAll('a[href*="#"]');

if (anchors.length > 0) {
  smoothScroll(anchors);
}

const horizontalMenu = document.getElementById("main-menu");

const horizontalMenuTwo = document.getElementById("head-menu");

const linkScroll = document.getElementById("anchor");

const linkScrollTwo = document.getElementById("is-anchor");

if (horizontalMenu) {
  setScrollListener(horizontalMenu, "active", 0);
  setScrollListener(linkScroll, "active", 400);
}

if (horizontalMenuTwo) {
  setScrollListener(horizontalMenuTwo, "active", 0);
  setScrollListener(linkScrollTwo, "active", 400);
}

const form = document.getElementById("form");

if (form) {
  eventSubmit(form);
}

const checkbox = document.getElementById("checkbox");
const sendBtn = document.getElementById("btn-send");

if (checkbox) {
  btnDisabled(checkbox, sendBtn);
}

const check = document.getElementById("check");

if (check) {
  eventChange(check);
}
