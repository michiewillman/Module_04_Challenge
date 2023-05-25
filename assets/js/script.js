var time = document.getElementById("time");
var questionContainer = document.getElementById("questions");
var scoresList = document.getElementById("highscores");

var allStoredScores = [];
var userScore = 0; 
var timer;
var secondsLeft;

// All Questions + Their Answers as objects
var q1 = {
  question: "Commonly used data types DO NOT include:",
  a1: "1. strings",
  a2: "2. alerts",
  a3: "3. booleans",
  a4: "4. numbers",
  answer: "a2"
}
var q2 = {
  question: "The condition in an if / else statement is enclosed within ___.",
  a1: "1. curly brackets",
  a2: "2. quotes",
  a3: "3. parentheses",
  a4: "4. square brackets",
  answer: "a3"
}
var q3 = {
  question: "Arrays in JavaScript can be used to store:",
  a1: "1. numbers and strings",
  a2: "2. other arrays",
  a3: "3. booleans",
  a4: "4. all of the above",
  answer: "a4",
}
var q4 = {
  question: "String values must be enclosed within ___ when being assigned to variables.",
  a1: "1. commas",
  a2: "2. curly brackets",
  a3: "3. quotes",
  a4: "4. parentheses",
  answer: "a3"
}
var q5 = {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  a1: "1. console.log",
  a2: "2. terminal / bash",
  a3: "3. for loops",
  a4: "4. JavaScript",
  answer: "a1"
}
var questionIndex = 0;
var allQuestions = [q1, q2, q3, q4, q5];
var currentQuestion;

// Sets answer values
var answer1 = document.getElementById("choice1");
var answer2 = document.getElementById("choice2");
var answer3 = document.getElementById("choice3");
var answer4 = document.getElementById("choice4");

  // When user clicks on an answer, write next question
  answer1.addEventListener("click", checkAnswer);
  answer2.addEventListener("click", checkAnswer);
  answer3.addEventListener("click", checkAnswer);
  answer4.addEventListener("click", checkAnswer);

function writeQuestion() {

  // Hide start screen container, Show questions/answers container
  var startScreen = document.getElementById("start-screen");
  var questionTitle = document.getElementById("question-title");
  startScreen.classList.add("hide");
  questionContainer.classList.remove("hide");
  // Display a question
  currentQuestion = allQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.question;
  // Display its answers
  answer1.textContent = currentQuestion.a1;
  answer2.textContent = currentQuestion.a2;
  answer3.textContent = currentQuestion.a3;
  answer4.textContent = currentQuestion.a4;

  // Add to index at the end so it cycles through questions
  questionIndex++;

  if (questionIndex > 4) {
    answer1.addEventListener("click", endQuiz);
    answer2.addEventListener("click", endQuiz);
    answer3.addEventListener("click", endQuiz);
    answer4.addEventListener("click", endQuiz);
  }
}

function startTimer() {
  // Sets interval in variable
  timer = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds";

  }, 1000);
}

function playQuiz() {
  secondsLeft = allQuestions.length * 10;
  writeQuestion();
  startTimer();
}

function endQuiz() {
  clearInterval(timer);
  var finalScreen = document.getElementById("final-screen");
  questionContainer.classList.add("hide");
  var finalScreen = document.getElementById("final-screen");
  finalScreen.classList.remove("hide");
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = userScore;

  if (secondsLeft === 0) {
    endQuiz();
  }

  // Hide timer
  time.classList.add("hide");
}

function checkAnswer(event) {
  var resultText = document.getElementById("result");
  resultText.classList.remove("hide");
  var target = event.target;

  if (target.dataset.name === currentQuestion.answer) {
    resultText.textContent = "CORRECT!";
    userScore + 20;
  } else {
    resultText.textContent = "Wrong Answer. Try again.";
    secondsLeft - 15;
  }
  writeQuestion();
}

// Button that starts the quiz
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", playQuiz);

// Set user score when submitted & redirect to highscores page
function setHighScores() {
  // Object to put scores into ---> send JSON string to local storage
  var initialsInput = document.getElementById("initials-here");
  var storeUser = {
    initials: initialsInput.value.trim(),
    score: userScore,
    }
  // Save current score to allStoredScores
  localStorage.setItem("allStoredScores", JSON.stringify(storeUser));

}

// TODO: MAKE THIS SHIT WORK
var submitButton = document.getElementById("submit");
submitButton.addEventListener("submit", function() {
  setHighScores();
  window.location.href = "highscores.html";
  console.log("submitted");
});



