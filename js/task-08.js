const form = document.querySelector("form.login-form");

console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę wypełnić wszystkie pola formularza!");
  }
  const userData = { email: email.value, Password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
