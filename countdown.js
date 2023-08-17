const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const inputMinutes = document.getElementById("inputTime");
const resetButton = document.getElementById("resetButton");

let intervalId;

let remainingTime = 10 * 60; // Initial countdown time in seconds (10 minutes)

function updateCountdown() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    
    countdownDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (remainingTime <= 0) {
        clearInterval(intervalId);
        // countdownDisplay.textContent = "Time's up!";
    countdownDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        startButton.disabled = false;
    } else {
        remainingTime--;
    }
}

startButton.addEventListener("click", function(e) {
    e.preventDefault();
    intervalId = setInterval(updateCountdown, 1000); // Update countdown every second (1000 milliseconds)
    startButton.disabled = true;
});

stopButton.addEventListener("click", function(e) {
    e.preventDefault();
    clearInterval(intervalId); // Stop the countdown
    countdownDisplay.textContent = "Countdown stopped";
    startButton.disabled = false;
});

inputMinutes.addEventListener("keydown", function(e){
    if(e.key == "Enter")
    {
        e.preventDefault();
        remainingTime = inputMinutes.value * 60;
    }

})

inputMinutes.onblur = function(){
    remainingTime = inputMinutes.value * 60;
};

resetButton.addEventListener("click", function(e){
    e.preventDefault();
    remainingTime = 0 * 60;
    inputMinutes.value = "";
    countdownDisplay.textContent = "00:00:00";
});