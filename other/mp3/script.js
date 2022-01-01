// Ajoutez plus tard une base de donées avec plusieurs musiques
let media = new Audio("vas.mp3");

let play_pause = document.querySelector(".center");
let max_timer = document.querySelector(".max-timer");

let current_timer = document.querySelector(".current-timer");

let ball = document.querySelector(".ball");

play_pause.addEventListener("click", togglePlay);
media.addEventListener("timeupdate", progressBar);

media.addEventListener("loadedmetadata", function () {
  max_timer.textContent = formatTime(media.duration);
});

function formatTime(x) {
  let min = Math.floor(x / 60);
  let sec = Math.floor(x % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

function percentPlayed() {
  let slider = document.querySelector(".slider").clientWidth;
  let ratio = slider / media.duration;
  let percentage = (media.currentTime * ratio).toFixed(2);
  ball.style.marginLeft = percentage + "px";
}

function progressBar() {
  current_timer.textContent = formatTime(media.currentTime);

  media.onended = () => {
    play_pause.classList.replace("fa-pause-circle", "fa-play-circle");
    current_timer.textContent = "00:00";
    ball.style.marginLeft = "0px";
  };
  percentPlayed();
}

function togglePlay() {
  if (media.paused === true) {
    media.play();
    play_pause.classList.replace("fa-play-circle", "fa-pause-circle");
  } else {
    media.pause();
    play_pause.classList.replace("fa-pause-circle", "fa-play-circle");
  }
}
