let secondsElapsed = 0;
let interval = null;
const timeDisplay = document.getElementById("time");

function startClock() {
    if (interval !== null) return;
    interval = setInterval(() => {
        secondsElapsed++;
        setTime();
    }, 1000);
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    clearInterval(interval);
    interval = null;
    secondsElapsed = 0;
    setTime();
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    timeDisplay.innerText = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? `0${number}` : number;
}
