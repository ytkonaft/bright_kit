function addClassBtn(btnEvent, navigationMenu, bodyWrap, body) {
  btnEvent.addEventListener("click", () => {
    btnEvent.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    bodyWrap.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
}

export default addClassBtn;
