let timeInSeconds = 10; //Time in seconds

function updateTimer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  //Formatting time as MM:SS
  const formattedTime = minutes + ":" + seconds;

  //Update the timer elemnt
  const timerElement = document.getElementById("timer");
  timerElement.innerText = formattedTime;

  //Decrement the time
  timeInSeconds = timeInSeconds - 1;

  //Check if the timer has reached 0
  if (timeInSeconds < 0) {
    clearInterval(timerInterval); //Stop the timer
    alert("BOOM");
  }
}

//Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
