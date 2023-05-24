var time = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var questionContainer = document.getElementById("questions");
var scoresList = document.getElementById("highscores");

var allStoredScores = [];
var userScore = 0; 
var timer;
var secondsLeft;
var questionIndex = 0;

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

  // Add to index at the end so it cycles through questions
  questionIndex++;

  // When user clicks on an answer, write next question
  choice1.addEventListener("click", writeQuestion);
  choice2.addEventListener("click", writeQuestion);
  choice3.addEventListener("click", writeQuestion);
  choice4.addEventListener("click", writeQuestion);

  if (secondsLeft === 0) {
    endQuiz();
  }
  if (questionIndex > 4) {
    choice1.addEventListener("click", endQuiz);
    choice2.addEventListener("click", endQuiz);
    choice3.addEventListener("click", endQuiz);
    choice4.addEventListener("click", endQuiz);
  }
}



function startTimer() {
  // Sets interval in variable
  timer = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds";

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

  // Hide timer
  time.classList.add("hide");
}

// function checkAnswer() {
//   if (userChoice === trueAnswer) {
//     answerCorrect();
//     moveToNext();
//   } else {
//     answerWrong();
//   }
// }

function resultTimer() {
  var messageTime = 3;
  var messageTimer = setInterval(function() {
    messageTime--;
  }, 1000);
}

function checkAnswer() {
  var resultText = document.getElementById("result");
  resultText.classList.remove("hide");

  // Display result of answer selection
  if (answerCorrect) {
    resultText.textContent = "CORRECT!";
    userScoreTotal + 20;
  } else {
    resultText.textContent = "Wrong Answer. Try again.";
    secondsLeft - 15;
  }

  // After 3 seconds, message will disapear
  if (messageTime === 0) {
    resultText.classList.add("hide");
  } else {
    resultText.classList.remove("hide");
    }
}

function renderHighScores() {
  // Pull all user scores from storage & parse
  localStorage.getItem("allStoredScores", JSON.stringify(allStoredScores));

  if (allStoredScores !== null) {
    // Display initials & scores
    for (var i = 0; i > allStoredScores.length; i++) {
      var scoreList = allStoredScores[i];

      // Make li child for every score pairing from storage
      var li = document.createElement("li");
      scoresList.appendChild(li)
    }
  }
}
renderHighScores();

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
submitButton.addEventListener("submit", setHighScores);



