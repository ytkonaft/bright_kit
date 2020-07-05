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

export default eventChange;
