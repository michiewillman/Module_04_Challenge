var scoreList = document.getElementById("highscores");

// Set function to pull scores from local storage
function renderHighScores() {
  // Pull all user scores from storage & parse
  localStorage.getItem("allStoredScores", JSON.stringify(allStoredScores));

  if (allStoredScores !== null) {
    // Display initials & scores
    for (var i = 0; i > allStoredScores.length; i++) {
      scoreList = allStoredScores[i];

      // Make li child for every score pairing from storage
      var li = document.createElement("li");
      scoreList.appendChild(li)
    }
  }
}
// Call page to automatically pull scores from local storage
renderHighScores();

// Clears local storage when "clear" button is clicked
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
  localStorage.clear();
});
