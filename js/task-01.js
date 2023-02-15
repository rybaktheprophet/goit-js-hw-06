const liItems = document.querySelectorAll("li.item");
const numberOfCategories = `Number of categories: ${[...liItems].length}`;
console.log(numberOfCategories);

liItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
