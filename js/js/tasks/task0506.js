var timer = document.getElementById('timer');
var startPauseBtn = document.getElementById('start-pause-btn');
var circleBtn = document.getElementById('circle-btn');
var resetBtn = document.getElementById('reset-btn');
var circleBox = document.getElementById('circle-box');
var counter = 1;

var watch = new Stopwatch(timer);

startPauseBtn.addEventListener('click', watchStartPause);

resetBtn.addEventListener('click', watchReset);

circleBtn.addEventListener('click', watchGetCircle);

window.addEventListener("keydown", function(e){
    if (e.keyCode == 83) {
        watchStartPause();
    }
    if (e.keyCode == 82) {
        watchReset();
    }
    if(e.keyCode === 67) {
        watchGetCircle();
    }
});

function watchStartPause(){
    if (watch.isOn) {
        watch.stop();
        startPauseBtn.innerHTML = 'Resume';
        circleBtn.classList.add('disabled');
        timer.classList.add('timer-scale-down');
    } else {
        watch.start();
        startPauseBtn.innerHTML = 'Pause';
        circleBtn.classList.remove('disabled');
        timer.classList.remove('timer-scale-down');
    }
}

function watchReset(){
    watch.stop();
    watch.reset();
    circleBtn.classList.add('disabled');
    startPauseBtn.innerHTML = 'Start';
}

function watchGetCircle() {
    watch.getCircle();
}

function Stopwatch(elem) {

    var time = 0;
    var interval;
    var offset;

    function update(){
        if (this.isOn) {
            time += delta();
        }
        var formattedTime = timeFormatter(time);
        elem.innerHTML = formattedTime;
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
        var time = new  Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        if (seconds == '00') {
            addTimerAnimation();
        } else {
            removeTimerAnimation();
        }

            while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }
        return minutes + ' : ' + seconds + ' . ' + milliseconds;
    }

    function addTimerAnimation(){
        timer.classList.add('timer-scale-up');
    }

    function removeTimerAnimation(){
        timer.classList.remove('timer-scale-up');
    }

    function circle() {
        if (watch.isOn) {
            var circleItem = document.createElement('h4');
            circleItem.innerHTML = 'circle ' + counter + ' - ' + timeFormatter(time);
            circleItem.classList.add('circle-item');
            circleBox.appendChild(circleItem);
            counter++;
        }
    }

    function clearCircles() {
        while (circleBox.hasChildNodes()) {
            circleBox.removeChild(circleBox.firstChild);
        }
    }

    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
        counter = 1;
        update();
        clearCircles();
        removeTimerAnimation();
    };

    this.getCircle = function(){
        circle();
    }
}