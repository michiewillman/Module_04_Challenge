var timer = document.getElementById("timer");
var questionTitle = document.getElementById("question-title");
var choiceList = document.getElementById("choices");
var startButton = document.getElementById("start-button");
var clearButton = document.getElementById("clear");
var resultText = document.getElementById("result");

var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitButton = document.getElementById("submit");

var scoreTotal = ""; 
var userChoice = ; // user selected an answer
var allAnswers = ; // the current list of answers the page is on?

startButton.addEventListener("click", playQuiz);

function playQuiz() {

}

var secondsLeft = 80;

function setTimer() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = timer.value + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

      // End quiz
      // Display score

    }

  }, 1000); // <-- millisecond (1/1000th second)
}

// Question 1 - Commonly used data types DO NOT include:
var oneAnswers = {
  answerOne: "strings",
  answerTwo: "booleans",
  answerThree: "alerts",
  answerFour: "numbers"
}

// Question 2 - The condition in an if / else statement is encolsed within ___.
var twoAnswers = {
  answerOne: "quotes",
  answerTwo: "curly brackets",
  answerThree: "parentheses",
  answerFour: "square brackets"
}

// Question 3 - Arrays in JavaScript can be used to store:
var threeAnswers = {
  answerOne: "numbers and strings",
  answerTwo: "other arrays",
  answerThree: "booleans",
  answerFour: "all of the above"
}

// Question 4 - String values must be enclosed within ___ when being assigned to variables.
var fourAnswers = {
  answerOne: "commas",
  answerTwo: "curly brackets",
  answerThree: "quotes",
  answerFour: "parentheses"
}

// Question 5 - A very useful tool used during development and debugging for printing content to the debugger is:
var fiveAnswers = {
  answerOne: "JavaScript",
  answerTwo: "terminal / bash",
  answerThree: "for loops",
  answerFour: "console.log"
}

// 

// Create ol for answers

for (var i = 0, i > allAnswers.length, i++) {
  // create li for each answer in the list
  // append child li to the question or "ol"
}

// Swap questions and answers out for each screen
// Figure out how to navigate between the screens

function checkAnswer() {
  if (userChoice === true) {
    answerCorrect();
    moveToNext();
  } else {
    answerWrong();
  }
}

function answerCorrect() {
  resultText.textContent = "CORRECT!";
  scoreTotal++;
}

function answerWrong() {
  resultText.textContent = "Wrong Answer. Try again.";
  scoreTotal--;
  secondsLeft - 15;
}

function moveToNext() {

}

function setHighScores() {

}


// Allow user to enter their initials
// Display the score and initials below

clearButton.addEventListener("click", function() {
  localStorage.clear();
})
