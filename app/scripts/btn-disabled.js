function btnDisabled(elem, btn) {
  elem.addEventListener("change", (event) => {
    if (event.target.checked) {
      btn.removeAttribute("disabled");
    } else {
      btn.setAttribute("disabled", true);
    }
  });
}

export default btnDisabled;
