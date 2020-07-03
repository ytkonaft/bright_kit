function removeClassBody(bodyWrap, navigationMenu, body) {
  bodyWrap.addEventListener("click", () => {
    navigationMenu.classList.remove("active");
    bodyWrap.classList.remove("active");
    body.classList.remove("overflow-hidden");
  });
}
export default removeClassBody;
