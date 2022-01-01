let player = document.querySelector(".center");
let audio1 = new Audio("vas.mp3");
let current = false;
let current_timer = document.querySelector('.current-timer');
let icon = document.querySelectorAll('.icon');


player.addEventListener("click", function () {
temps()
  if (current === false) {
    audio1.play();
    player.classList.replace('fa-play-circle', 'fa-pause-circle')
    current = true;
  } else {
    audio1.pause();
    player.classList.replace('fa-pause-circle', 'fa-play-circle')
    current = false;
  }
});
function temps() {
    let timer = Math.floor(audio1.currentTime)
    current_timer.innerHTML = timer
    setTimeout("temps()",1000);
}

icon.forEach(function(element) {
    element.addEventListener("click", function(e) {
        e.style.color = "red"
        console.log('test')
    })

    
});