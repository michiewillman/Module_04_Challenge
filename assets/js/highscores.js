// Clears local storage when "clear" button is clicked
var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function() {
  localStorage.clear();
});

