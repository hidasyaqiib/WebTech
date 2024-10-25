let timerInterval;
let totalCentiseconds = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimerDisplay() {
    const seconds = Math.floor(totalCentiseconds / 100);
    const centiseconds = totalCentiseconds % 100;

    // Format the timer display
    timerDisplay.textContent = `${String(seconds).padStart(3, '0')}:${String(centiseconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (totalCentiseconds < 9999) {
                totalCentiseconds++;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
            }
        }, 10); // Update every 10 milliseconds (100 centiseconds = 1 second)
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalCentiseconds = 0;
    updateTimerDisplay();
});

// Initialize the display
updateTimerDisplay();