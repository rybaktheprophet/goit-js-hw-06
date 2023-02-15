const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i++) {
  const ingredientName = ingredients[i];

  const ingredientListItem = document.createElement("li");

  ingredientListItem.classList.add("item");
  ingredientListItem.textContent = `${ingredientName}`;

  const ingredientList = document.querySelector("#ingredients");
  ingredientList.append(ingredientListItem);
}
