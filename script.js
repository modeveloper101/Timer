var timeStart = null; // check if timer started
var timeStopped = null; // check at what time the timer stopped
var stoppedDuration = 0; //check how long the timer stopped for
var startInterval = null; // used to stop the startInterval() method
var flag = false; // control the start/stop of the timer 


const START_STOP_BUTTON = document.getElementById("startStop");
const RESET_BUTTON = document.getElementById("resetBtn");


START_STOP_BUTTON.addEventListener("click", function() {
	if (!flag) {
		startTimer();
		flag = true;
		START_STOP_BUTTON.innerHTML = "STOP";
		START_STOP_BUTTON.style.background = "#F15412";
	} else {
		stopTimer(); 
		flag = false;
		START_STOP_BUTTON.innerHTML = "START";
		START_STOP_BUTTON.style.background = "#47B5FF";

	}
});


RESET_BUTTON.addEventListener("click", function() {
	resetTimer();
	START_STOP_BUTTON.innerHTML = "START";
	START_STOP_BUTTON.style.background = "#47B5FF";
});


function startTimer() {
	if(timeStart === null) {
		timeStart = new Date(); //grab the current time with Date class
	}

	if (timeStopped !== null) {
		stoppedDuration += (new Date() - timeStopped);
	}

	startInterval = setInterval(clockRunning, 10);
}

function stopTimer()  {
	timeStopped = new Date();
	clearInterval(startInterval);
}

function clockRunning() {
	var currentTime = new Date();
	var timeElapsed = new Date(currentTime - timeStart - stoppedDuration);

	var minutes = timeElapsed.getUTCMinutes();
	var seconds = timeElapsed.getUTCSeconds();
	var milliseconds = timeElapsed.getUTCMilliseconds();

	milliseconds = Math.floor(milliseconds/10);

	document.getElementById("timer-display").innerHTML = 
	(minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
	(seconds = seconds < 10 ? '0' + seconds : seconds) + ":" + 
	(milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds)
}


function resetTimer() {
	clearInterval(startInterval);
	timeStart = null;
	timeStopped = null;
	stoppedDuration = 0;
	document.getElementById("timer-display").innerHTML = "00:00:00";
	flag = false;
}





