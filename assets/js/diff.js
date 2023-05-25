
function resultTimer() {
  var messageTime = 3;
  var messageTimer = setInterval(function() {
    messageTime--;
  }, 1000);
}

  // After 3 seconds, message will disapear
  if (messageTime === 0) {
    resultText.classList.add("hide");
  } else {
    resultText.classList.remove("hide");
    }