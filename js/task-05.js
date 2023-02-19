// const nameInput = document.querySelector("input#text-input");
// const value = nameInput.value;
// nameInput.addEventListener("change", setOutput);

// const setOutput = () => {};

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.target.value;

  if (event.target.value === "") {
    nameOutput.textContent = "Anonymous";
  }
});
