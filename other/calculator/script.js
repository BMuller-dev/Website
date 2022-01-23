const screen = document.querySelector(".screen");
const buttons = document.querySelector(".button");

buttons.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log("test");
  });
});
