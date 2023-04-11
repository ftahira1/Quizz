// Questions variable

var questions = [{
    question: "Commonly used data types DO not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts",
},
{
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "4. parenthesis", 
},
{
    question: "Arrays in javascript can be used to store _______.",
    choices: ["number and strings", "other arrays", "booleans", "all of the above"],
    correct: "all of the above", 
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
    correct: "<script>", 
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["body", "head", "both", "neither"],
    correct: "both", 
},
{
    question: "How does a FOR loop start?",
    choices: ["1. for(i = 0; i <= 50)", "2. for (i = 0; i <= 5; i++)", "3. for (i <= 5; i++)", "4. for i = 1 to 5"],
    correct: "2. for (i = 0; i <= 5; i++)", 
},
]

// Query selector variables

//Header query selector
var timeCountdown = document.querySelector("#time-countdown");
var viewHighScores = document.querySelector("#view-high-scores");

//Main query selector

//Different sections query selection
var quizWelc = document.querySelector(".quiz-welc");
var quizData = document.querySelector(".quiz-data");
var quizDone = document.querySelector("#quiz-done");
var quizScore =document.querySelector("#quiz-score");

//All the buttons query selection
var startQuiz = document.querySelector("#start-quiz");
var answer = document.querySelectorAll(".answer");
var submitHighScore = document.querySelector("#submit-high-score");
var goBackBtn = document.querySelector("#go-back-btn");
var clearHighScores = document.querySelector("#clear-high-scores");
var button = document.querySelectorAll(".button");
var optionBtn = document.querySelector(".option-buttons")

//Questions in quiz-data section
var quizQuestions = document.querySelector("#quiz-questions");
// var answerButton = document.querySelectorAll(".button");
var rightAnswer = document.querySelector("#right-answer");
var wrongAnswer = document.querySelector("#wrong-answer");

//Submitted answers
var finalScore = document.querySelector(".final-score");
var scoreNumber = document.querySelector("#score-number");

//Time countdown variables
var secondsLeft = 60;
var liveScore = 0;
var Index = 0;


//Quiz starts here

startQuiz.addEventListener("click", beginQuiz);

function beginQuiz () {
    quizWelc.style.display = "none";
    quizData.style.display = "flex";

    timeCountdown.textContent = "Time: " +secondsLeft;

    //Start countdown
    var setTime = setInterval(function() {
        if(secondsLeft > 0) {
            secondsLeft--;
            timeCountdown.textContent = "Time: " + secondsLeft;
        } else {
            clearInterval(setTime);
            completedQuiz();
        }
    }, 1000);
};

var correctAswer = questions[Index].correct;

      //Validate answers
      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", checkAnswer);}
    
    

function checkAnswer(event) {
    var x = event.target.children[1].textContent;
    if (x === correctAswer) {
        liveScore +=30;
        finalScore.textContent = liveScore;
        rightAnswer.style.display = "flex";
        wrongAnswer.style.display = "none";
    } else {
        liveScore -= 10;
        secondsLeft -=10;
        rightAnswer.style.display = "none";
        wrongAnswer.style.display ="flex";
    }
    setTimeout(() => {
        Index++;
        resQuiz();
    }, 700);
}

function resQuiz() {
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "none";

    if (secondsLeft > 0 && Index < 6) {
        for (var i = 1; i < questions.length; i++) {
            if (Index === i) {
                quizQuestions.textContent = questions[i].question;
                let a = questions[i];
                for (var i = 0; i < a.choices.length; i++){
                answer[i].textContent = a.choices[i];
                }
                }
            }
        }
    }



function completedQuiz() {
    quizData.style.display = "none";
    quizDone.style.display = "flex";
}
console.log("here");






