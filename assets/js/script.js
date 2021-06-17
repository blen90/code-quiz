
/*let start document.querySelector(".start");
let quiz = document.querySelector(".quiz");
let display = document.querySelector(".time");
let question = document.querySelector(".questions");
let optionA = document.querySelector(".A");
let optionB = document.querySelector(".B");
let optionC = document.querySelector(".C");*/

var secondsLeft = 90;
var timer;
var timerCount;
var questions ="";
var score = 0;
/*
var startButton = document.querySelector(".start-button");*/

let timeEl = document.querySelector (".timer");

let question = [ 
    {
    question= "How many planets are there our solar system?",
        optionA= "6",
        optionB= "8",
        optionC= "9",
        optionD="7",
        correct= "B",
    },
    {
    question= "Which planet has the most moons?",
        optionA= "Earth",
        optionB= "Mars",
        optionC= "Saturn",
        optionD="Mercury",
        correct= "C",
    },
    {
        question= "Which is the hottest planet in our solar system?",
            optionA= "Jupiter",
            optionB= "Mars",
            optionC= "Earth",
            optionD="Venus",
            correct= "D",
        },
        {
        question= "Which planet is the largest in our solar system?",
            optionA= "Jupiter",
            optionB= "Mars",
            optionC= "Saturn",
            optionD="Mercury",
            correct= "A",
        },
        {
            question= "What is the order of the planets from the sun in our solar system?",
                optionA= "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
                optionB= "Mars, Venus, Earth, Jupiter, Saturn, Uranus, Neptune",
                optionC= "Saturn, Earth, Mercury, Mars, Uranus, Neptune, Jupiter,Venus",
                optionD= "Neptune, Uranus, Saturn, Jupiter, Mars, Earth, Venus, Mercury",
                correct= "A",
            },
    
]


    function renderQuestion(){
        let q = questions[runningQuestion];
        
        question.innerHTML = "<p>"+ q.questions +"</p>";
        optionA.innerHTML = q.optionA;
        optionB.innerHTML = q.optionB;
        optionC.innerHTML = q.optionC;
        optionD.innerHTML = q.optionD;
    }

    start.addEventListener("click",startQuiz);

// start quiz/*
/*function startQuiz(){
    start.style.display = "none";
    runningQuestion = 0;
    count = 0;
    score = 0;
    renderQuestion();
    quiz.style.display = "block";
    

    
    startTimer(30, display);
}

function startGame() {
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }*/

function timer() {
    let timerInterval = setInterval(function() {
        timeEl.textContent = secondsLeft

        if(secondsLeft === 0) {
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