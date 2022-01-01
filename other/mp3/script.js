let play = document.querySelector(".center");
let player = new Audio("vas.mp3");

let playing = false;
let current_Time = document.querySelector('.current-timer');




// let progression = document.querySelector('.progression')
// let slider = document.querySelector('.slider')
// let slider_width = slider.clientWidth
// let icon = document.querySelectorAll('.icon');

// Timer de la musique
function formatTime(x) {
    let min = Math.floor(x / 60);
    let sec = Math.floor(x % 60);
    return min + ':' + ((sec<10) ? ('0' + sec) : sec);
}

// Gestion du mode play & resume
play.addEventListener("click", function () {
    updateProgress()
  if (playing === false) {
    player.play();
    play.classList.replace('fa-play-circle', 'fa-pause-circle')
    playing = true;
  } else {
    player.pause();
    play.classList.replace('fa-pause-circle', 'fa-play-circle')
    playing = false;
  }
});

// Actualisation
function updateProgress() {
    current_Time.innerHTML = formatTime(player.currentTime)
    setTimeout("updateProgress()",1000);
}

// let current = player.currentTime
// let percent = (current / player.duration) * 100;
// progression.style.marginLeft = percent + 'px'


