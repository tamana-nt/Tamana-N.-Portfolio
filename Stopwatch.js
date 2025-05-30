// Declare necessary variables
let secondsElapsed = 0;  // Track the number of seconds elapsed
let interval = null;      // Interval to manage time increments
const timeDisplay = document.getElementById("time");  // Get reference to the time display

// Start the stopwatch
function startClock() {
    if (interval !== null) return;  // Prevent multiple intervals running simultaneously
    interval = setInterval(function() {
        secondsElapsed++;  // Increment the number of seconds
        setTime();  // Update the display
    }, 1000);  // Run every 1000 milliseconds (1 second)
}

// Stop the stopwatch
function stopClock() {
    clearInterval(interval);  // Stop the interval
    interval = null;  // Reset the interval variable
}

// Reset the stopwatch
function resetClock() {
    clearInterval(interval);  // Stop the interval if it's running
    interval = null;  // Reset the interval variable
    secondsElapsed = 0;  // Reset the seconds elapsed counter
    setTime();  // Update the display to 00:00
}

// Update the display with the current time in MM:SS format
function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);  // Calculate minutes
    const seconds = secondsElapsed % 60;  // Calculate seconds

    // Format the time to always show two digits (e.g., 02:09 instead of 2:9)
    timeDisplay.innerHTML = `${pad(minutes)}:${pad(seconds)}`;
}

// Add leading zero if necessary
function pad(number) {
    return number < 10 ? `0${number}` : number;
}
