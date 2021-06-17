

var secondsLeft = 90;
var timer;
var timerCount;
var questions = "";
var score = 0;


let timeEl = document.querySelector(".timer");
let questionsEl = document.querySelector(".questions");
let answersEl = document.querySelector(".answers");
let startBtn = document.getElementById("#start-btn")


var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));

var questions = [
    {
        question= "How many planets are there our solar system?",
        options: ["6", "8", "9", "7"],
        answer: "8"
    },
    {
        question= "Which planet has the most moons?",
        options: ["Earth", "Mars", "Saturn", "Mercury"],
        answer: "Saturn"

    },
    {
        question= "Which is the hottest planet in our solar system?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        answer: "Venus"
    },
    {
        question= "Which planet is the largest in our solar system?",
        options: ["Jupiter", "Mercury", "Earth", "Venus"],
        answer: "Jupiter"
    },
    {
        question= "Which is the fifth larges planet in the Solar System?",
        options: ["Jupiter", "Earth", "Saturn", "Venus"],
        answer: "Earth"
    },

]

start - btn.addEventListener("click", startQuiz);

function starQuiz() {
    if (storedScores !== null) {
        allScores = storedScores;
    }
    timer()
  

    getQuestion() {

    }
}

function timer() {
    let timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time's up!"
        } else {
            secondsLeft--;
            timeEl.textContent = secondsLeft

        }
    }, 1000);
}
/*
startButton.addEventListener("click", startGame);*/

timer();