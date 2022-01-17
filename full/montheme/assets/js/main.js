const main_home = document.querySelector(".container_home");
const explore_home = document.querySelector(".explore_home");
const hello_world = document.querySelector(".hello_world");
const presentation_home = document.querySelector(".presentation_home");


explore_home.addEventListener("click", function(){
main_home.style.overflow = "visible";
main_home.style.heigh = "";
hello_world.style.animation = "transition 5s normal forwards";
presentation_home.style.animation = "opacity 5s normal forwards";
console.log('test')
})