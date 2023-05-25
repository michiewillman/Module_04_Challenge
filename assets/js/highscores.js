var scoreList = document.getElementById("highscores");

// Set function to pull scores from local storage
function renderHighScores() {
  // Pull all user scores from storage & parse
  var highScores = JSON.parse(localStorage.getItem("allStoredScores"));

  for (var i = 0; i < localStorage.length; i++) {
    var userEach = document.createElement("li");
    scoreList.appendChild(userEach);
    userEach.textContent = highScores.initials + highScores.score;
  }
}

// Call page to automatically pull scores from local storage
renderHighScores();

// Clears local storage when "clear" button is clicked
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.clear();
  location.reload();
});
