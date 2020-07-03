function toggleClassBtn(
  btnEvent,
  navigationButton,
  navigationMenu,
  bodyWrap,
  body
) {
  btnEvent.addEventListener("click", () => {
    navigationButton.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    bodyWrap.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
}

export default toggleClassBtn;
