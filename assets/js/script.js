var timer;
var secondsLeft = 90;
var timerCount;

var questions = "";
var answers = "";
var highscore = 0;


let startBtn = document.getElementById("start-btn")
let timeEl = document.querySelector(".timer");
let questionsEl = document.querySelector(".question");
let answersEl = document.querySelector(".answer");
let correctEl = "";
let currentQuestion = questions.length - 1;
let highscoreEl = document.querySelector(".high-score");



var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questionIndex = 0;

var questions = [
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Saturn", "Mercury"],
        correct: "Saturn"

    },
    {
        question: "How many planets are there in our Solar System?",
        options: ["6", "8", "9", "7"],
        correct: "8"
    },
    {
        question: "Which is the hottest planet in our Solar System?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        correct: "Venus"
    },
    {
        question: "Which planet is the largest in our Solar System?",
        options: ["Jupiter", "Mercury", "Earth", "Venus"],
        correct: "Jupiter"
    },
    {
        question: "Which is the fifth larges planet in our Solar System?",
        options: ["Jupiter", "Earth", "Saturn", "Venus"],
        correct: "Earth"
    },

]

const maxPoints = 100;
const totalQuestions = 5;


function startQuiz() {

    timer()

    getQuestion()

    answerIsCorrect()
}



function timer() {
    let timerInterval = setInterval(function () {

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time's up!"
        } else {
            secondsLeft--;
            timeEl.textContent = secondsLeft;

        }
    }, 1000);
}

function getQuestion() {

    questionsEl.append(questions[questionIndex].question);

    questions[questionIndex].options.forEach(function (singleAnswer) {

        var answerButton = document.createElement("button");
        answerButton.id = "answerButton";
        answerButton.textContent = singleAnswer;
        answerButton.style.background = "purple";
        answersEl.appendChild(answerButton);

    });
}

function answerIsCorrect() {
        
        if (answersEl === questions[questionIndex].correct) {
            textContent = "That is correct!"
            highscore++;
            questionIndex++;
        } else {
            // answer is wrong
            timer -= 3;
        }
};

   

startBtn.addEventListener("click", startQuiz);


