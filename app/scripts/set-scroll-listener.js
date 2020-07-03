function setScrollListener(elem, activeClass, startPosition) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > startPosition) {
      elem.classList.add(activeClass);
    } else {
      elem.classList.remove(activeClass);
    }
  });
}

export default setScrollListener;
