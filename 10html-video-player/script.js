// get our elements

const player = document.querySelector(".player");
const video = document.querySelector(".player__video");
const playerControl = document.querySelector(".player__controls");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelector(".player__slider");
const vol = document.querySelector('input[name="volume"]');
const rate = document.querySelector('input[name="playbakRate"]');
const playIcon = "./icons8-play-100.png";
const pauseIcon = "./icons8-pause-100.png";
// build funcitions
let duration = video.duration;
function updateButton() {
  console.log("button updated");
}

function togglePlay() {
  const icon = video.paused ? pauseIcon : playIcon;
  video.paused ? video.play() : video.pause();
  toggle.src = icon;
}
function volumeControl() {
  video.volume = this.value;
}
function rateControl() {
  video.playbackRate = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function seek(event) {
  const clickPosition =
    event.clientX - progressBar.getBoundingClientRect().left;
  progressBar.style.width = clickPosition + "px";
  let current = (Number(clickPosition) * duration) / 600;
  video.currentTime = current;
  console.log(clickPosition);
}
setInterval(() => {
  let current = video.currentTime;
  let length = (current * 100) / duration;
  progressBar.style.width = `${length}%`;
}, 100);
// hook up the event listeners

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
vol.addEventListener("change", volumeControl);
rate.addEventListener("change", rateControl);
progress.addEventListener("click", seek);
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));
