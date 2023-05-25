var scoreList = document.getElementById("highscores");

// Set function to pull scores from local storage
function renderHighScores() {
  // Pull all user scores from storage & parse
  var storedScores = JSON.parse(localStorage.getItem("allStoredScores"));
  console.log(storedScores);

  for (var i = 0; i < storedScores.length; i++) {
    var topScore = document.createElement("li");
    scoreList.appendChild(topScore);
    var player = storedScores[i].initials;
    topScore.textContent = player.toUpperCase() + " - " + storedScores[i].score;
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
