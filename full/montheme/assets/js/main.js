const body = document.querySelector("body");
const explore = document.querySelector(".explore");
const hello_world = document.querySelector(".hello_world");


explore.addEventListener("click", function(){
 body.style.overflow = "visible";
 body.style.heigh = "";
 hello_world.style.animation = "transition 5s normal forwards"
 console.log('test')
})