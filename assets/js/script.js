var time = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var questionContainer = document.getElementById("questions");
var choiceList = document.getElementById("choices");
var startButton = document.getElementById("start-button");
var clearButton = document.getElementById("clear");
var resultText = document.getElementById("result");

var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials-here");
var submitButton = document.getElementById("submit");

var scoresList = document.getElementById("highscores");
var allStoredScores = [];
var userScore = ""; 
var secondsLeft;
var isEnded;
// var userChoice = ; // TODO: user selected an answer
// var correctChoice = ; // TODO: the real correct answer
// var allAnswers = ; // TODO: the current list of answers the page is on?

function init() {
  renderHighScores();
}

function playQuiz() {
  secondsLeft = 5;
  startTimer();
  // TODO: Display first list
  // TODO: Listen for a user answer click on an li
  // TODO: Check if answer is the correct li
  // TODO: Swap out current list with the next list
}

function startTimer() {
  // Sets interval in variable
  var timer = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;

    if (isEnded || secondsLeft === 0) {
      clearInterval(timer);
      // TODO: Display score
    }
  }, 1000);
}

function displayQuestOne() {
  // Question 1 - Commonly used data types DO NOT include:
var oneAnswers = {
  answerOne: "strings",
  answerTwo: "booleans",
  answerThree: "alerts",
  answerFour: "numbers"
}
}
function displayQuestTwo() {
// Question 2 - The condition in an if / else statement is encolsed within ___.
var twoAnswers = {
  answerOne: "quotes",
  answerTwo: "curly brackets",
  answerThree: "parentheses",
  answerFour: "square brackets"
}
}
function displayQuestThree() {
// Question 3 - Arrays in JavaScript can be used to store:
var threeAnswers = {
  answerOne: "numbers and strings",
  answerTwo: "other arrays",
  answerThree: "booleans",
  answerFour: "all of the above"
}
}
function displayQuestFour() {
// Question 4 - String values must be enclosed within ___ when being assigned to variables.
var fourAnswers = {
  answerOne: "commas",
  answerTwo: "curly brackets",
  answerThree: "quotes",
  answerFour: "parentheses"
}
}
function displayQuestFive() {
  // Question 5 - A very useful tool used during development and debugging for printing content to the debugger is:
  var fiveAnswers = {
    answerOne: "JavaScript",
    answerTwo: "terminal / bash",
    answerThree: "for loops",
    answerFour: "console.log"
  }
}

// TODO: If question 5 is answered, isEnded = true

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
    if (answerIsWrong) {
      answerWrong();
    } else {
      answerCorrect();
    }

    // After 3 seconds, message will disapear
    if (messageTime === 0) {
      resultText.style.display = "none";
    } else {
      resultText.style.display = "block";
    }

  }, 1000);
}

function answerCorrect() {
  resultText.textContent = "CORRECT!";
  userScoreTotal + 20;
}

function answerWrong() {
  resultText.textContent = "Wrong Answer. Try again.";
  secondsLeft - 15;
  userScoreTotal - 10;
}

function displayFinalScore() {
  // TODO: add functionality
}

function moveToNext() {
  // TODO: Swap current list with next set
}

function renderHighScores() {
  // Pull all user scores from storage & parse
  localStorage.getItem("allStoredScores", JSON.stringify(allStoredScores));

  if (allStoredScores !== null) {
    // Display initials & scores
    for (i = 0; i > allStoredScores.length; i++) {
      var scoreList = allStoredScores[i];

      // Make li child for every score pairing from storage
      var li = document.createElement("li");
      scoresList.appendChild(li)
    }
  }
}

function setHighScores() {
  // Object to put scores into ---> send JSON string to local storage
  var storeUser = {
    initials: initialsInput.value.trim(),
    score: userScore,
    }
    // Save current score to allStoredScores
    localStorage.setItem("allStoredScores", JSON.stringify(storeUser));

}

startButton.addEventListener("click", playQuiz);

// Take user to high scores page upon submission
submitButton.addEventListener("submit", function() {
  setHighScores();
  // Take user to top scores page
  window.location.href = "/highscores.html";
});

// Clears local storage when "clear" button is clicked
clearButton.addEventListener("click", function() {
  localStorage.clear();
});

// Init pulls latest top scores from local storage on every page load
init();
