
var secondsLeft = 90;
var timer;
var timerCount;
var questions = "";
var score = 0;


let timeEl = document.querySelector(".timer");


let questionsEl = document.querySelector(".question");
let answersEl = document.querySelector(".answer");
let startBtn = document.getElementById("start-btn")

/*
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));*/
var questionIndex = 0;
var questions = [
    {
        question: "How many planets are there in our Solar System?",
        options: ["6", "8", "9", "7"],
        answer: "8"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Saturn", "Mercury"],
        answer: "Saturn"

    },
    {
        question: "Which is the hottest planet in our Solar System?",
        options: ["Jupiter", "Mars", "Saturn", "Venus"],
        answer: "Venus"
    },
    {
        question: "Which planet is the largest in our Solar System?",
        options: ["Jupiter", "Mercury", "Earth", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Which is the fifth larges planet in our Solar System?",
        options: ["Jupiter", "Earth", "Saturn", "Venus"],
        answer: "Earth"
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

function getQuestion() { //empty and show the question and once you click answer it should go to the next question
    // questionsEl.empty();
    questionsEl.append(questions[questionIndex].question)

    questions[questionIndex].options.forEach(function(singleAnswer){

        console.log(singleAnswer)
    // create one box only for the answers so they display in a list
        answersEl.append(singleAnswer);
    {
            // create new button for each choice
            var choiceButton = document.createElement("button");
            choiceButton.textContent = currentQuestion.choices[i];
            
            // display on the page
            choicesEl.appendChild(choiceButton);
          }
          // attach click event listener to each choice
          choicesEl.children[0].addEventListener("click", function(event){
            questionClick(choicesEl.children[0]);
          });
          choicesEl.children[1].addEventListener("click", function(event){
            questionClick(choicesEl.children[1]);
          });
          choicesEl.children[2].addEventListener("click", function(event){
            questionClick(choicesEl.children[2]);
          });
          choicesEl.children[3].addEventListener("click", function(event){
            questionClick(choicesEl.children[3]);
          });
        }
    

      

        //Dinamically add buttons for the answers
        //After an answer is clicked question index++ to move to the next question

//Append the questions and answers to the boxes 

startBtn.addEventListener("click", startQuiz);


/*
timer();*/

//data attributes if it tells you correct answer or wrong answer then it moves on 
