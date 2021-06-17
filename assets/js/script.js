
/*let start document.querySelector(".start");
let quiz = document.querySelector(".quiz");
let display = document.querySelector(".time");
let question = document.querySelector(".questions");
let optionA = document.querySelector(".A");
let optionB = document.querySelector(".B");
let optionC = document.querySelector(".C");*/

var secondsLeft = 90;
var timer;
var timerCount;/*
var startButton = document.querySelector(".start-button");*/

let timeEl = document.querySelector (".timer");
/*
let questions = {}
    {
        question : "How many planets are there in the universe?",
        choiceA= "6",
        choiceB= "8",
        choiceC= "9",
        choiceD="7"
        correct= "B"
    }

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