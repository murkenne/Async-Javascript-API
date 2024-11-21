// Task 1: Countdown Timer
function startCountdown(duration) {
    const display = document.getElementById("countdown-display");
    let timeLeft = duration;

    const interval = setInterval(() => {
        if (timeLeft > 0) {
            display.textContent = `Time left: ${timeLeft} seconds`;
            timeLeft--;
        } else {
            display.textContent = "Time's up!";
            clearInterval(interval); // Stop the timer
        }
    }, 1000);
}

// Task 2: Delayed Notification
function delayedNotification(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

// Task 3: Repeat Notification
function repeatNotification(message, intervalDuration) {
    const notificationInterval = setInterval(() => {
        if (confirm(message)) {
            clearInterval(notificationInterval); // Stop when dismissed
        }
    }, intervalDuration);
}

// Attach event listeners
document.getElementById("start-timer").onclick = () => {
    const duration = parseInt(document.getElementById("timer-input").value, 10);
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid number greater than 0.");
    } else {
        startCountdown(duration);
    }
};

document.getElementById("notify-once").onclick = () => {
    delayedNotification("This is a delayed notification.", 3000);
};

document.getElementById("notify-repeat").onclick = () => {
    repeatNotification("This is a repeated notification. Click OK to stop.", 5000);
};
