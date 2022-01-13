const main = document.querySelector("main");
const explore = document.querySelector(".explore");
const hello_world = document.querySelector(".hello_world");


explore.addEventListener("click", function(){
 main.style.overflow = "visible";
 hello_world.style.animation = "transition 5s normal forwards"
 console.log('test')
})
