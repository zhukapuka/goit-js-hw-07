const inputData = document.querySelector("#name-input");
const outputData = document.querySelector("#name-output");
inputData.addEventListener("input", (ev) => {
  const userName = ev.currentTarget.value.trim();
  if (userName === "") {
    outputData.textContent = "Anonymous";
  } else {
    outputData.textContent = userName;
  }
});
inputData.addEventListener("focus", () => {
  inputData.value = "";
});
outputData.addEventListener("blur", () => {
  inputData.value = "Please, enter your name";
});
