//  використанням властивостей і методів DOM-елементів,
//  напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
// і кількість елементів у категорії (усіх <li>, вкладених у нього).

const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach((itemsEl) => {
  console.log(`Categories: ${itemsEl.querySelector("h2").textContent}`);
  console.log(itemsEl.querySelectorAll("li").length);
});
