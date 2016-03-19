var time = 0;
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



