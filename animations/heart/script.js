let heart = document.querySelector(".shape");
let waifu = document.querySelector(".waifu");
heart.addEventListener("mouseover", function (event) {
  waifu.style.color = "#fff";
});

heart.addEventListener("mouseleave", function (event) {
  waifu.style.color = "#65001f";
});
