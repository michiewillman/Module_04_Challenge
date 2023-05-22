var timer = document.getElementById("timer");
var questionTitle = document.getElementById("question-title");
var questionContainer = document.getElementById("questions");
var choiceList = document.getElementById("choices");
var startButton = document.getElementById("start-button");
var clearButton = document.getElementById("clear");
var resultText = document.getElementById("result");

var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials-here");
var submitButton = document.getElementById("submit");

var scoreTotal = ""; 
var userChoice = ; // TODO: user selected an answer
var correctChoice = ; // TODO: the real correct answer
var allAnswers = ; // TODO: the current list of answers the page is on?

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

      // TODO: End quiz
      // TODO: Display score

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


// TODO: Create ol for answers

for (var i = 0, i > allAnswers.length, i++) {
  // TODO: create li for each answer in the list
  // TODO: append child li to the question or "ol"
}


// TODO: Display first list
// TODO: Listen for a user answer click on an li
// TODO: Check if answer is the correct li
// TODO: Swap out current list with the next list


function checkAnswer() {
  if (userChoice === correctChoice) {
    answerCorrect();
    moveToNext();
  } else {
    answerWrong();
  }
}

function resultMessageTimer() {
  // Displays "CORRECT" or "WRONG" message for 3 seconds
  var messageTime = 3;
  var messageTimer = setInterval(function() {
    messageTime--;

    // TODO: Display either answerCorrect or answerWrong messages

    // After 3 seconds, message will disapear
    if (messageTime === 0) {
      resultText.style.display = "none";
    }

  }, 1000);
}

function answerCorrect() {
  resultText.textContent = "CORRECT!";
  scoreTotal + 20;
}

function answerWrong() {
  resultText.textContent = "Wrong Answer. Try again.";
  secondsLeft - 15;
}

function moveToNext() {
  // TODO: Swap current list with next set
}

function setHighScores() {
  // Set initials of user
  localStorage.setItem("initials", initialsInput.value);
  // Set score of user
  localStorage.setItem("score", scoreTotal);
  // Take user to high scores page upon score submition
  submitButton.addEventListener("submit", function() {
    // TODO: take user directly to Top Scores page
  });
}

function renderHighScores() {
  // Pull previous initials from storage
  var initials = localStorage.getItem("initials");
  // Pull previous scores from storage
  var scores = localStorage.getItem("score");
  // TODO: Display initials & scores
  for (j = 0, , j++) { // for every stored user highscore
    document.createElement("li");
    // TODO: append child to ol "highscores"
  }
}

clearButton.addEventListener("click", function() {
  localStorage.clear();
});
