var time = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var questionContainer = document.getElementById("questions");
var resultText = document.getElementById("result");
var scoresList = document.getElementById("highscores");

var allStoredScores = [];
var userScore = ""; 
var secondsLeft;
var isEnded;
var questionIndex = 0;

function init() {
  renderHighScores();
}

function writeQuestion() {
  // Sets answer values
  var answer1 = document.getElementById("choice1");
  var answer2 = document.getElementById("choice2");
  var answer3 = document.getElementById("choice3");
  var answer4 = document.getElementById("choice4");

  // Hide start screen container, Show questions/answers container
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  questionContainer.classList.remove("hide");
  // Display a question
  var currentQuestion = allQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.question;
  // Display its answers
  answer1.textContent = currentQuestion.a1;
  answer2.textContent = currentQuestion.a2;
  answer3.textContent = currentQuestion.a3;
  answer4.textContent = currentQuestion.a4;

  // When user clicks on an answer, write next question
  var anyAnswer = document.querySelectorAll(".answer");
  anyAnswer.addEventListener("click", writeQuestion);

  // Add to index at the end so it cycles through questions
  questionIndex++;
}

function playQuiz() {
  secondsLeft = 10;
  writeQuestion();
  startTimer();
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

// All Questions + Their Answers as objects
var q1 = {
  question: "Commonly used data types DO NOT include:",
  a1: "1. strings",
  a2: "2. alerts",
  a3: "3. booleans",
  a4: "4. numbers",
}
var q2 = {
  question: "The condition in an if / else statement is encolsed within ___.",
  a1: "1. curly brackets",
  a2: "2. quotes",
  a3: "3. parentheses",
  a4: "4. square brackets"
}
var q3 = {
  question: "Arrays in JavaScript can be used to store:",
  a1: "1. numbers and strings",
  a2: "2. other arrays",
  a3: "3. booleans",
  a4: "4. all of the above"
}
var q4 = {
  question: "String values must be enclosed within ___ when being assigned to variables.",
  a1: "1. commas",
  a2: "2. curly brackets",
  a3: "3. quotes",
  a4: "4. parentheses"
}
var q5 = {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  a1: "1. JavaScript",
  a2: "2. terminal / bash",
  a3: "3. for loops",
  a4: "4. console.log"
}
var allQuestions = [q1, q2, q3, q4, q5];


// TODO: If all questions are answered, isEnded = true


function checkAnswer() {
  if (userChoice === trueAnswer) {
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

function displayFinalScreen() {
  var finalScreen = document.getElementById("final-screen");
  var finalScore = document.getElementById("final-score");
  finalScreen.style.display = "block";
  finalScore.textContent = userScore;
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

// Button that starts the quiz
var startButton = document.getElementById("start-button");

startButton.addEventListener("click", playQuiz);

// Take user to high scores page upon submission
var initialsInput = document.getElementById("initials-here");
var submitButton = document.getElementById("submit");
submitButton.addEventListener("submit", function() {
  setHighScores();
  window.location.href = "/highscores.html";
});

// Clears local storage when "clear" button is clicked
// var clearButton = document.getElementById("clear");

// clearButton.addEventListener("click", function() {
//   localStorage.clear();
// });

// Init pulls latest top scores from local storage on every page load
init();
