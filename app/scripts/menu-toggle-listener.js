function menuToggleListener(target, navigationMenu, overlay) {
  target.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  });
}

export default menuToggleListener;
