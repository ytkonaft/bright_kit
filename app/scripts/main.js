import $ from "jquery";
import "slick-carousel";

import menuToggleListener from "./menu-toggle-listener";
import initSmoothScroll from "./smooth-scroll";
import setScrollListener from "./set-scroll-listener";
import formSubmitListener from "./submit-listener";
import btnDisabled from "./btn-disabled";
import eventChange from "./event-change";
import slickOptions from "./constants/slick-options";

const sliderSlick = [
  ".testimonials-one .testimonials-one__slider-wrap",
  ".features-one .features-one__slider-wrap",
].join();

$(sliderSlick).slick(slickOptions.testimonialsOne);
$(".testimonials-two .testimonials-two__slider-wrap").slick(
  slickOptions.testimonialsTwo
);
$(".team-two .team-two__slider-wrap").slick(slickOptions.team);

const navigationButton = document.getElementById("navigation-toggle-btn");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButtonOff = document.getElementById("btn-nav-off");
const menuOverlay = document.getElementById("menu-overlay");

if (navigationMenu) {
  menuToggleListener(navigationButton, navigationMenu, menuOverlay);
  menuToggleListener(navigationButtonOff, navigationMenu, menuOverlay);
  menuToggleListener(menuOverlay, navigationMenu, menuOverlay);
}

const anchors = document.querySelectorAll('a[href*="#"]');

if (anchors.length > 0) {
  initSmoothScroll(anchors);
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
  formSubmitListener(form);
}

const checkbox = document.getElementById("checkbox");
const sendBtn = document.getElementById("btn-send");

if (checkbox) {
  btnDisabled(checkbox, sendBtn);
}

const priceCheckbox = document.getElementById("check");

if (priceCheckbox) {
  eventChange(priceCheckbox);
}
