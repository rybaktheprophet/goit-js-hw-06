function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const numberInput = document.querySelector("input");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    document.querySelector("#boxes").appendChild(div);
  }
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

dataCreate.addEventListener("click", (event) => {
  createBoxes(numberInput.value);
});

dataDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});
