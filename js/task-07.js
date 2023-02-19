const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("change", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
