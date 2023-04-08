// Questions variable

var questions = [{
    question: "Commonly used data types DO not include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
},
{
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: "4. parenthesis", 
},
{
    question: "Arrays in javascript can be used to store _______.",
    choices: ["1. number and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above", 
},
{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["1. <scripting>", "2. <script>", "3. <js>", "4. <javascript>"],
    answer: "2. <script>", 
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["1. body", "2. head", "3. both", "4. neither"],
    answer: "3. both", 
},
{
    question: "How does a FOR loop start?",
    choices: ["1. for(i = 0; i <= 50)", "2. for (i = 0;i <= 5; i++)", "3. for (i <= 5; i++)", "4. for i = 1 to 5"],
    answer: "3. for (i = 0; i <= 5; i++)", 
},
];

// Query selector variables

//Header query selector
var timeCountdown = document.querySelector("#time-countdown");
var viewHighScores = document.querySelector("#view-high-scores");

//Main query selector

//Different sections query selection
var quizWelc = document.querySelector(".quiz-welc");
var quizData = document.querySelector("#quiz-data");
var quizDone = document.querySelector("#quiz-done");
var quizScore =document.querySelector("#quiz-score");

//All the buttons query selection
var startQuiz = document.querySelector("#start-quiz");
var answer = document.querySelector(".answer");
var submitHighScore = document.querySelector("#submit-high-score");
var goBackBtn = document.querySelector("#go-back-btn");
var clearHighScores = document.querySelector("#clear-high-scores");

//Questions in quiz-data section
var quizQuestions = document.querySelector("#quiz-questions");
var optionButtons = document.querySelector(".option-buttons");
var rightAnswer = document.querySelector("#right-answer");
var wrongAnswer = docume.querySelector("#wrong-question");

//Submitted answers
var finalScore = document.querySelector("#final-score");
var scoreNumber = document.querySelector("#score-number");



