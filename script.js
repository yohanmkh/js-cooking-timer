const btnBoiled = document.querySelector('#cookies_boiled');
const btnSoft = document.querySelector('#cookies_soft');
const btnMedium = document.querySelector('#cookies_medium');
const btnHard = document.querySelector('#cookies_hard');

const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

const countdown = document.querySelector('#countdown');
const player = document.querySelector('#player');
const eggAnimation = document.querySelector('#egg-animation'); // Egg animation div

let timerID;
let timeRemaining = 0;

// Start timer
function startTimer(time) {
  timeRemaining = time;

  if (timerID) clearInterval(timerID); // Stop any running timer

  timerID = setInterval(() => {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    countdown.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

    if (timeRemaining === 0) {
      clearInterval(timerID);
      countdown.textContent = '00 : 00';
      player.play();
      showEggAnimation(); // Show animation when done
    }

    timeRemaining--;
  }, 1000);
}

// Show egg animation when done
function showEggAnimation() {
  eggAnimation.style.display = 'block'; // Show the animation
  eggAnimation.classList.add('animate-egg'); // Add animation class
}

// Stop timer
btnStop.addEventListener('click', () => {
  clearInterval(timerID);
});

// Reset timer
btnReset.addEventListener('click', () => {
  location.reload();
});
//start timer
btnStart.addEventListener('click', () => {
  startTimer(timeRemaining);
});

// Egg buttons
btnBoiled.addEventListener('click', () => startTimer(0.1 * 60));
btnSoft.addEventListener('click', () => startTimer(13 * 60));
btnMedium.addEventListener('click', () => startTimer(16 * 60));
btnHard.addEventListener('click', () => startTimer(20 * 60));
