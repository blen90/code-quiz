var timer;
var secondsLeft = 10;
var timerCount;

var questions = "";
var answers = "";
var highscore = 0;


let startBtn = document.getElementById("start-btn")
let timeEl = document.querySelector(".timer");
let questionsEl = document.querySelector(".question");
let answersEl = document.querySelector(".answer");
let lastQuestion = questions.length - 1;
let highscoreEl = document.querySelector(".high-score");



var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questionIndex = 0;

var questions = [
    {
        question: "How many planets are there in our Solar System?",
        options: ["6", "8", "9", "7"],
        correct: "8"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Saturn", "Mercury"],
        correct: "Saturn"

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



function startQuiz() {
    
    //console.log("hey we are starting!")
    /*if (storedScores !== null) {
        allScores = storedScores;
    }*/

    timer()

    getQuestion() 


}



function timer() {
    let timerInterval = setInterval(function () {
       // timeEl.textContent = secondsLeft

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

    console.log(questionIndex)
    
    questionsEl.append(questions[questionIndex].question);

    questions[questionIndex].options.forEach(function(singleAnswer){
        console.log(singleAnswer)
        answersEl.append(singleAnswer); {

   

        //Dinamically add buttons for the answers
        //After an answer is clicked question index++ to move to the next question
    }
});

}
//Append the questions and answers to the boxes 

startBtn.addEventListener("click", startQuiz);


/*
timer();*/

//data attributes if it tells you correct answer or wrong answer then it moves on 
