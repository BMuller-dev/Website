let heart = document.querySelector(".shape");
let waifu = document.querySelector(".waifu");
heart.addEventListener("mouseover", function (event) {
  waifu.style.color = "#fff";
});

heart.addEventListener("mouseleave", function (event) {
  waifu.style.color = "";
});

let feed = 1;
let button = document.querySelector(".give_love");
button.addEventListener("click", function () {
  feed *= 1.02;
  let scale = "scale(" + feed + ")";
  heart.style.transform = scale;
});





