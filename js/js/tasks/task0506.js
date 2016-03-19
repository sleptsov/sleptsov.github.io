var timer = document.getElementById('timer');
var startPauseBtn = document.getElementById('start-pause-btn');
var circleBtn = document.getElementById('circle-btn');
var resetBtn = document.getElementById('reset-btn');
var circleBox = document.getElementById('circle-box');
var counter = 1;

var watch = new Stopwatch(timer);

startPauseBtn.addEventListener('click', function(){
    if (watch.isOn) {
        watch.stop();
        startPauseBtn.innerHTML = 'Resume';
        circleBtn.classList.add('disabled');

    } else {
        watch.start();
        startPauseBtn.innerHTML = 'Pause';
        circleBtn.classList.remove('disabled');
    }
});

resetBtn.addEventListener('click', function () {
    watch.stop();
    watch.reset();
    circleBtn.classList.add('disabled');
    startPauseBtn.innerHTML = 'Start';
});

circleBtn.addEventListener('click', function () {
    watch.getCircle();
});

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
        while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
        }
        return minutes + ' : ' + seconds + ' . ' + milliseconds;
    }

    function circle() {
        if (watch.isOn) {
            var circleItem = document.createElement('h4');
            circleItem.innerHTML = 'circle ' + counter + ' - ' + timeFormatter(time);
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
        update();
        clearCircles();
    };

    this.getCircle = function(){
        circle();
    }
}



























/* FIRST VERSION*/

/*
var time = 50000;
var running = false;
var timer;
var hours, mins, secs, ms;
var counter = 1;

function startPause(){
    if (!running){
        running = true;
        increment();
        document.getElementById('startPause').innerHTML = 'Pause';
        document.getElementById('circle-btn').classList.remove('disabled');
    } else {
        running = false;
        document.getElementById('startPause').innerHTML = 'Resume';
        document.getElementById('circle-btn').classList.add('disabled');
    }
}

function reset() {
    clearInterval(timer);
    time = hours = mins = secs = ms = 0;
    running = false;
    document.getElementById('circle-btn').classList.add('disabled');
    document.getElementById('startPause').innerHTML = 'Start';
    document.getElementById('timer').innerHTML = '00:00:00.0';
    var circleBox = document.getElementById('circle-box');
    while (circleBox.hasChildNodes()) {
        circleBox.removeChild(circleBox.firstChild);
    }
    counter = 1;
}

function increment() {
    if (running) {
        timer = setTimeout(function() {
            time++;
            hours = addZero(Math.floor(time/10/60/60), 2);
            mins = addZero(Math.floor(time/10/60), 2);
            secs = addZero(Math.floor(time/10), 2);
            ms = addZero((time%10), 0);
            document.getElementById('timer').innerHTML = hours + ':' + mins + ':' + secs + '.' + ms;
            increment();
        }, 100)
    }
}

function circle() {
    if (running) {
        var circleBox = document.getElementById('circle-box');
        var circle = document.createElement('h4');
        circle.innerHTML = 'circle ' + counter + ' - ' + hours + ':' + mins + ':' + secs + '.' + ms;
        circleBox.appendChild(circle);
        counter++;
    }
}

function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}
*/