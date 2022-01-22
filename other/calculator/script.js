const screen = document.querySelector(".screen");
const button = document.querySelector(".button");

button.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log("test");
  });
});

