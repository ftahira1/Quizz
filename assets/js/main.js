// Questions variable

var questions = [{
    question: "Commonly used data types DO not include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correct: "3. alerts",
},
{
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correct: "4. parenthesis", 
},
{
    question: "Arrays in javascript can be used to store _______.",
    choices: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correct: "4. all of the above", 
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["1. <scripting>", "2. <script>", "3. <js>", "4. <javascript>"],
    correct: "2. <script>", 
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["1. body", "2. head", "3. both", "4. neither"],
    correct: "3. both", 
},
{
    question: "How does a FOR loop start?",
    choices: ["1. for(i = 0; i <= 50)", "2. for (i = 0;i <= 5; i++)", "3. for (i <= 5; i++)", "4. for i = 1 to 5"],
    correct: "3. for (i = 0; i <= 5; i++)", 
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
var answerButton = document.querySelectorAll(".button");
var rightAnswer = document.querySelector("#right-answer");
var wrongAnswer = document.querySelector("#wrong-answer");

//Submitted answers
var finalScore = document.querySelector("#final-score");
var scoreNumber = document.querySelector("#score-number");

//Time countdown variables
var setTime;
var secondsLeft = 60;
var liveScore = 0;


//Quiz starts here

startQuiz.addEventListener("click", beginQuiz);

function beginQuiz () {
    quizWelc.style.display = "none";
    quizData.style.display = "flex";

    //Add event listener to buttons to check the if its right or wrong.
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click",checkAnswer);
    }

    //Start countdown
    setTime = setInterval(function() {
        if(secondsLeft > 0) {
            secondsLeft--;
            timeCountdown.textContent = "Time: " + secondsLeft;
        } else {
            completedQuiz();
        }
    }, 1000);

    
};


var correctAnswer = questions.map(({questions, choices, correct}) => ({correct}));
var ans = answer.textContent
function checkAnswer() {
    if (ans === correctAnswer) {
     secondsLeft = secondsLeft + 10;
    } else {
    secondsLeft = secondsLeft - 10;
    }
}



//Questions loop
var textIndex = 1;
optionBtn.addEventListener("click", contQuiz)

function contQuiz() {


    if (secondsLeft > 0 && liveScore < 10) {
        if(textIndex < questions.length) {
            quizQuestions.textContent = questions[textIndex].question;
            textIndex++;
            var x = questions[textIndex - 1]
            for (var i = 0; i < x.choices.length; i++) {
                answer[i].textContent = x.choices[i];
                      }
              } else {
                // secondsLeft = 0;
                // completedQuiz();
                // liveScore += secondsLeft;
              }
        } 
            
        };

function completedQuiz() {
    quizData.style.display = "none";
    quizDone.style.display = "flex";
    
    submitHighScore.addEventListener("click", viewHighScores);
}


function viewHighScores() {
    quizDone.style.display = "none";
    quizScore.style.display = "flex";
};





