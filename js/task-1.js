const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach((itemsEl) => {
  console.log(`Categories: ${itemsEl.querySelector("h2").textContent}`);
  console.log(itemsEl.querySelectorAll("li").length);
});
