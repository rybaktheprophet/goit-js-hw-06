function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
let colorName = document.querySelector("span.color");
changeColorBtn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
});
