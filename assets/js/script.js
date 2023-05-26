var time = document.getElementById("time");
var questionContainer = document.getElementById("questions");
var scoresList = document.getElementById("highscores");
var resultText = document.getElementById("result");
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

function startTimer() {
  // Sets interval in variable
  timer = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds";

    if (secondsLeft === 0 ) {
      endQuiz();
      }

  }, 1000);
}

function playQuiz() {
  secondsLeft = allQuestions.length * 2;
  writeQuestion();
  startTimer();
}

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
    return;
}

function checkAnswer(event) {
  resultText.classList.remove("hide");
  var target = event.target;

  if (target.dataset.name === currentQuestion.answer) {
    resultText.textContent = "CORRECT!";
    userScore += 20;
  } else {
    resultText.textContent = "Wrong Answer. 5 seconds subtracted from your time.";
    secondsLeft -= 5;
  }

  // Timer for message that displays the answer result
  setTimeout( function() {
    resultText.classList.add("hide");
  } , 2000);

  // End the quiz after all questions are asked
  if (questionIndex === allQuestions.length) {
    endQuiz();
    return;
  } 
  // Write next question
  writeQuestion();
}

function endQuiz() {
  clearInterval(timer);
  var finalScreen = document.getElementById("final-screen");
  questionContainer.classList.add("hide");
  finalScreen.classList.remove("hide");

  // Hide timer & result text
  var timeContainer = document.querySelector(".timer");
  timeContainer.classList.add("hide");
  resultText.classList.add("hide");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = userScore + "%";
}

// Button that starts the quiz
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", playQuiz);

function setHighscores() {
  // Set array to value of local storage "allStoredScores"
  // If local storage is empty, set an empty array to push to
  var allStoredScores = JSON.parse(localStorage.getItem("allStoredScores"));
  if (localStorage.getItem("allStoredScores") === null) {
    allStoredScores = [];
  }
  var initialsInput = document.getElementById("initials-here");
  // Object to put scores into ---> send JSON string to local storage
  var newScore = {
    initials: initialsInput.value.trim(),
    score: userScore,
    };
  // Save current score to allStoredScores array
  allStoredScores.push(newScore);
  // Save array of all scores to local storage
  localStorage.setItem("allStoredScores", JSON.stringify(allStoredScores));
  // window.location.href = "highscores.html";
  console.log("submitted");
}

// Set user score when submitted & redirect to highscores page
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  setHighscores();
  window.location.href = "highscores.html";
});



