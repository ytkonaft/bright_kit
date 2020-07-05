function formSubmitListener(elem) {
  elem.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetForm = event.target;
    const name = targetForm.querySelector('[name="name"]').value;
    const email = targetForm.querySelector('[name="email"]').value;
    const message = targetForm.querySelector('[name="message"]').value;
    console.log({ name, email, message });
  });
}

export default formSubmitListener;
