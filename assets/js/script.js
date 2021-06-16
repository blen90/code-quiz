var secondsLeft = 90;
var timer;
var timerCount;
var startButton = document.querySelector(".start-button");

let timeEl = document.querySelector (".timer");

function startGame() {
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }

function timer() {
    let timerInterval = setInterval(function() {
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time's up!"
        } else { 
            timeEl.textContent = "Timer" + secondsLeft--;
            timeEl.textContent = secondsLeft
            
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);

timer();