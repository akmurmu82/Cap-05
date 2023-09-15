
// Getting all the HTML elements
let startBtn = document.querySelector('.startBtn')
let resetBtn = document.querySelector('.resetBtn')
let pauseBtn = document.querySelector('.pauseBtn')

let secondElem = document.querySelector('.second')
let minuteElem = document.querySelector('.minute')
let hourElem = document.querySelector('.hour')
let milisecondElem = document.querySelector('.milisecond')

// Starting the stopwatch
let second = 0;
let minute = 0;
let hour = 0;
let milisecond = 0;
let timerId;

let isTimerPaused = true;

function startTimer() {
    clearInterval(timerId);

    if (isTimerPaused) {
        console.log('Timer is started');
        timerId = setInterval(() => {
            second++;
            console.log(second);
            updateTimer();
        }, 1000)
        
        isTimerPaused = !isTimerPaused;
    }
}

function pauseTimer() {
    if(!isTimerPaused) {
        clearInterval(timerId);
        console.log('Timer is paused');
        isTimerPaused = !isTimerPaused;
    }
}

function updateTimer() {
    // if(milisecond==1000) {
    //     second++;
    //     milisecond = 0;
    // }
    if(second==60) {
        minute++;
        second = 0;
    }
    if(minute==5) {
        hour++;
        minute = 0;
    }
    milisecondElem.innerHTML = milisecond;
    secondElem.innerHTML = second;
    minuteElem.innerHTML = minute;
    hourElem.innerHTML = hour;
}

// Reset Timer
function resetTimer() {
    console.log('Timer is stopped/reset');
    clearInterval(timerId);
    second = 0;
    minute = 0;
    hour = 0;
    milisecond = 0;
    updateTimer();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);