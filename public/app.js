var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliseconds = document.getElementById("milliseconds");


var min = 0;
var sec = 0;
var millisec = 0;
var interval;

function timer() {
    millisec++;
    milliseconds.innerText = millisec;
    if (millisec >= 100) {
        sec++;
        seconds.innerText = sec;
        millisec = 0;
    } else if (sec >= 59) {
        min++;
        minutes.innerText = min;
        sec = 0;
    }

}
function start() {
    if (!interval) {
        interval = setInterval(timer, 10);

    }
}
function pause() {
    clearInterval(interval);
    interval = false;

}
function reset() {
    min = 0;
    sec = 0;
    millisec = 0;
    minutes.innerText = "0" + min;
    seconds.innerText = "0" + sec;
    milliseconds.innerText = "0" + millisec;
    clearInterval(interval);


}