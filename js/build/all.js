$(document).ready(function(){
    $('#logo-img').click(function(){
        $('div.panel-collapse').collapse('toggle');
    });
});
function task01(){
    var x = +prompt("Enter number: ", "2");
    var degree = +prompt("Enter degree: ", "3");
    var result;
    pow(x, degree);

    function pow(x, degree) {
        if (isNaN(x) || isNaN(degree)){
            console.log("Use ONLY numbers! ( ˘︹˘ )");
            return;// stop function if input wrong
        } else {
            // math rules for different degrees
            switch (true){
                case (degree == 0):
                    result = 1;
                    break;
                case (degree == 1):
                    result = x;
                    break;
                case (degree < 0):
                    result = x;
                    for (var j = 1; j < (degree * (-1)); j++) {
                        result = result * x;
                    }
                    result = 1 / result;
                    break;
                default:
                    result = x;
                    for (var i = 1; i < degree; i++) {
                        result = result * x;
                    }
            }
        }
        console.log ("Number " + x + " in degree " + degree + " is: " + result);
    }
}


function task02() {
    var arr = []; // init empty array
    var x = false;
    var t;
    do {
        var item = prompt("Enter new item in array (or click Close/Cancel button to stop)","");
        arr.push(item);    // fill arr with new items
        t = true;
        if (arr.length == 5) {
             t = confirm("Your rich max length of Array we need in this task. Continue?");
            console.log("Continue status", t);
            if(t == false) {
                break;
            }
        }
    } while (item !='' && item != null);
    if (t == true) {
        arr.pop();// cut the last item of arr, which can be '' or null
    }
    if (arr.length === 0){
        console.log('Array is EMPTY! Please, try once again.');
    } else {
        console.log("Final version of an Array", arr);
        var searchValue = prompt("Type value to search", "Jack");
        if (searchValue == '' || searchValue == null){
            console.log('The value that you are trying to find is NULL or EMPTY! Please, try once again.');
        } else {
            for (var i = 0; i < arr.length; i++) {
                if (arr.indexOf(searchValue) != -1){
                    x = true;// search for input value
                }
            }
            if (x) {
                alert("Welcome, " + searchValue + "!")
            } else {
                alert("There is no " + searchValue + " in array " + "[" + arr + "]");
            }
            console.log("Saerch value", searchValue);
        }
    }
}
function task03() {
    pageGenerator.createTestContainer();
    pageGenerator.createQuestionList();
    pageGenerator.createSubmitBtn();
}

var pageGenerator = {

    testContainer: document.createElement('form'),
    numberOfquestions: 3,
    numberOfanswers: 3,
    createTestContainer: function() {
        this.testContainer.classList.add('test-container', 'test-container-scale-up');
        this.testContainer.setAttribute('method', 'get');
        this.testContainer.setAttribute('action', '#');
        var testBox = document.getElementById('test');
        testBox.appendChild(this.testContainer);
        var testHeading = document.createElement('h3');
        testHeading.innerHTML = 'Programming skills test';
        testHeading.classList.add('text-center');
        this.testContainer.appendChild(testHeading);
    },
    createQuestionList: function() {
        var questionList = document.createElement('ol');
        for (var i = 0; i < this.numberOfquestions; i++) {
            var questionListItem = document.createElement('li');
            questionListItem.innerHTML = 'Question #' + (i + 1);
            this.testContainer.appendChild(questionList);
            questionList.appendChild(questionListItem);
            for (j = 0; j < this.numberOfanswers; j++) {
                var answerList = document.createElement('ul');
                var answerListItems = document.createElement('li');
                var answerItemBox = document.createElement('div');
                var answerItemLabel = document.createElement('label');
                var answerItemCheckBox = document.createElement('input');
                var answerDescription = document.createElement('span');
                answerDescription.innerHTML = 'answer # ' + (j + 1);
                answerList.setAttribute('class', 'answer-list-items');
                answerItemBox.setAttribute('class', 'checkbox');
                answerItemCheckBox.setAttribute('type', 'checkbox');
                answerItemCheckBox.setAttribute('name', 'question' + (i + 1));
                answerItemCheckBox.setAttribute('value', 'answer' + (j + 1));
                questionListItem.appendChild(answerList);
                answerList.appendChild(answerListItems);
                answerListItems.appendChild(answerItemBox);
                answerItemBox.appendChild(answerItemLabel);
                answerItemLabel.appendChild(answerItemCheckBox);
                answerItemLabel.appendChild(answerDescription);
            }
        }
    },
    createSubmitBtn: function() {
        var submitBtn = document.createElement('button');
        var submitBtnBox = document.createElement('div');
        submitBtnBox.classList.add('text-center');
        submitBtn.classList.add('btn', 'btn-primary');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.innerHTML = 'Check my results';
        this.testContainer.appendChild(submitBtnBox);
        submitBtnBox.appendChild(submitBtn);
    }
};



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
$().ready(function(){

   //Tooltip v.1
   $('.sing-up-form :input').hover(function(){
      $('body').append('<p class="my-tooltip"></p>'); //Add tooltip box
      $('.my-tooltip').fadeIn(300);
   }, function(){
      $('.my-tooltip').fadeOut(300, function(){
         $(this).remove();
      }); //Remove tooltip box
   }).mousemove(function(e){
      var mousex = e.pageX + 20; //Get X coordinates
      var mousey = e.pageY + 10; //Get Y coordinates
      var tooltipText = $(this).attr('data-my-tooltip') || 'Input field';//Read text from custom attribute
      $('.my-tooltip')
          .text(tooltipText)
          .css({ display: 'block', top: mousey, left: mousex });//Set tooltip position
   });

   //Tooltip v.2
   $('.details-form :input').focus(function(){
      $(this).next().delay(800).fadeIn(300);
   })
   .blur(function(){
      $(this).next().fadeOut(300);
   });
   $('#show-help').click(function(e){
      e.preventDefault();
      $('.my-tooltip-inline').fadeToggle(300);
      $(this).text(function(i, text){
         return text === "Show help" ? "Hide help" : "Show help"; // it`s magic, but it works
      });
   })
});

//Tabs
(function($) {
   $(function() {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
         $(this)
             .addClass('active').siblings().removeClass('active')
             .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
   });
})(jQuery);
(function($) {
    $(function() {
        //Carousel
        $('[data-jcarousel]').each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $('[data-jcarousel-control]').each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });
        $('.jcarousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();
                element.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                // Core configuration goes here
            })
            .jcarouselAutoscroll({
                interval: 3000,
                target: '+=1',
                autostart: true
            })
        ;
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

        //Nice Select Plugin
        $('select').niceSelect();

        // iCheck Plugin
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
            //increaseArea: '20%' // optional
        });
        // clear iCheck Plugin from other checkbox
        $('input.i-check-destroy').iCheck('destroy');


        // My-Dropdown menu
        $( '.my-dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );

    });
})(jQuery);
$(function(){
   $('.my-carousel-wrapper').myAwesomeCarousel();
});
//data
var users = [
    {
        id: 1,
        firstName: "Denis",
        secondName: "Sleptsov",
        education: "Donetsk National Technical University (2003 - 2009)",
        reasonsForGoIT: {
            1: "First reason...",
            2: "Second reason...",
            3: "Third reason..."
        },
        phone: "380 050 984 76 77",
        profileFB: "https://www.facebook.com/denis.sleptsov",
        feedback: "GoIT student",
        image: "img/profiles/boy.png"
    },
    {
        id: 2,
        firstName: "Foma",
        secondName: "Pershov",
        education: "Kharkiv Polytechnic Institute (2001 - 2006)",
        reasonsForGoIT: {
            1: "Lorem reason...",
            2: "Ipsum reason...",
            3: "Phasellus reason..."
        },
        phone: "380 99 930 5176",
        profileFB: "https://www.facebook.com/foma.pershov",
        feedback: "facebook bot",
        image: "img/profiles/foma.jpg"
    },
    {
        id: 3,
        firstName: "John",
        secondName: "Resig",
        education: " Rochester Institute of Technology (2000 - 2005)",
        reasonsForGoIT: {
            1: "No any reasons..."
        },
        phone: "",
        profileFB: "",
        feedback: "John Resig is a staff engineer at Khan Academy and the creator of the jQuery JavaScript library.",
        image: "img/profiles/resing.jpg"
    }
];

$(function(){

    var html = $('#simple-tmpl').html();
    var tmplBox = $('.simple-tmpl-box');
    var tmplBoxLd = $('.simple-tmplLd-box');
    // Render with JR plugin
    var content = tmpl(html, {
        data: users
    });
    tmplBox.append(content).hide();

    $('#render-tmpl').one('click', function(){
        tmplBox.slideDown(500);
        $(this).addClass('disabled');
    });

    //render with LoDash plugin
    var contentLd = _.template(html);

    tmplBoxLd.append(contentLd({
        data: users
    })).hide();

    $('#render-LoDash').one('click', function(){
        tmplBoxLd.slideDown(500);
        $(this).addClass('disabled');
    });

    //hide and remove user-box from DOM
    $('.hide-user').on('click', function(){
        $(this).parents('.user-box').slideUp(300, function(){
            $(this).remove();
        });
    })

});

'use strict';

// Data to save in localStorage

var questions = [
    {
        title: "Question #1",
        question: "What does HTML stand for?",
        answers: [
            {
                id: 1,
                var: "Hyper Text Markup Language",
                isCorrect: true
            },
            {
                id: 2,
                var: "Hyperlinks and Text Markup Language",
                isCorrect: false
            },
            {
                id: 3,
                var: "Home Tool Markup Language",
                isCorrect: false
            }
        ]
    },
    {
        title: "Question #2",
        question: "Who is making the Web standards?",
        answers: [
            {
                id: 1,
                var: "Microsoft",
                isCorrect: false
            },
            {
                id: 2,
                var: "Google",
                isCorrect: false
            },
            {
                id: 3,
                var: "The World Wide Web Consortium",
                isCorrect: true
            }
        ]
    },
    {
        title: "Question #3",
        question: "What does CSS stand for?",
        answers: [
            {
                id: 1,
                var: "Cascading Style Sheets",
                isCorrect: true
            },
            {
                id: 2,
                var: "Colorful Style Sheets",
                isCorrect: false
            },
            {
                id: 3,
                var: "Computer Style Sheets",
                isCorrect: false
            },
            {

                id: 4,
                var: "Creative Style Sheets",
                isCorrect: false
            }
        ]
    },
    {
        title: "Question #4",
        question: "Which of the following is correct?",
        answers: [
            {
                id: 1,
                var: "jQuery is a JavaScript Library",
                isCorrect: true
            },
            {
                id: 2,
                var: "jQuery is a JSON Library",
                isCorrect: false
            }
        ]
    },
    {
        title: "Question #5",
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        answers: [
            {
                id: 1,
                var: "the $ sign",
                isCorrect: true
            },
            {
                id: 2,
                var: "the % sign",
                isCorrect: false
            },
            {
                id: 3,
                var: "the ? sign",
                isCorrect: false
            }
        ]
    }
];

// Saving data to localStorage
function saveToLocalStorage(data){

    //First check browser support for localStorage
    if(typeof(Storage) !== "undefined") {

        var testQuestions = JSON.stringify(data); // object to string

        // check if already saved before
        if (localStorage.testQuestions == undefined){
            localStorage.setItem('testQuestions', testQuestions);
            //console.log('Object successfully saved to localStorage');
        } else {
            //console.log('Object is already saved to localStorage');
        }
    } else {
        //console.log("Update your browser! LocalStorage is not supported!");
    }
}

saveToLocalStorage(questions);


$(function(){

    //Get object from localStorage

    var testToObj =JSON.parse(localStorage.getItem('testQuestions'));

    function renderTest(){

        // Render template

        var html = $('#skill-test-tmpl').html();
        var tmplBox = $('.skill-test-box');
        var content = tmpl(html, {
            data: testToObj
        });
        tmplBox.append(content);
    }

    renderTest();


    //Custom modal function
    function modalDialog(message) {
        var $body = $('body');
        var $overlay = $('<div class="my-modal-overlay"></div>');
        var $modal = $('<div class="my-modal-message"></div>');
        var $message = $('<h3></h3>');
        var $closeBtn = $('<button class="btn btn-default">Close</button>');
        $message.text(message);
        $body.append($overlay);
        $overlay.append($modal);
        $modal.append($message).append($closeBtn);
        $closeBtn.one('click', function(){
            $($overlay).fadeOut(200, function(){
                $($overlay).remove();
            });
        })
    }

    // Check test results

    function checkResults(){

        var results = $('#skills-test').serializeArray();
        var givenAnswers = [];
        var correctResults = [];

        // Create array with given answers
        for (var j = 0; j < results.length; j++) {
            for(var answer in results[j].value) {
                givenAnswers.push(parseInt(results[j].value));
            }
        }

        // Create array with correct answers
        for (var i = 0; i < testToObj.length; i++) {
            //console.log(testToObj[i].answers);
            for (var key in testToObj[i].answers){
                if(testToObj[i].answers[key].isCorrect === true) {
                    correctResults.push(testToObj[i].answers[key].id);

                }
            }

        }

        // Compare given answers and correct answers
        if (_.isEqual(givenAnswers, correctResults)){
            modalDialog('All correct! You passed the test!');
        } else {
            modalDialog('The test is failed! Try again!');
        }
        //console.log('Answers ', givenAnswers);
        //console.log('Correct results ', correctResults);
    }

    function clearTest() {
        $('input.answer-radio').prop('checked', false);
    }


    var checkBtn = $('#check-test-btn');
    checkBtn.on('click', function(){
        checkResults();
        clearTest();
    })
});
$(function(){
    var url;
    var $riffsyResults = $("#riffsy-results");

    $('#riffsy-search').on('keypress', function(e){
       if(e.keyCode == 13){
           searchRiffsyGif();
       }
    });

    $("#riffsy-btn").on('click', function(){
       searchRiffsyGif();
    });

    function searchRiffsyGif(){
        url = $("#riffsy-search").val();
        $.ajax({
            method: "GET",
            url: "http://api.riffsy.com/v1/search?tag=" + url + "&limit=10",
            dataType: "json",
            success: function(data){
               //console.log(data.results);
                $.each(data.results, function(i, riff){
                   // console.log(riff.url);
                    $.each(riff.media, function(i, newRiff){
                       //console.log(newRiff.nanogif.preview);

                        var $riffsyLink = $('<a href='+ riff.url + ' target="_blank" ' + '></a>');
                        var $riffsyImg = $('<img '+ 'src=' + newRiff.nanogif.url + ' class="img-thumbnail riffsy-img" ' + '>');
                        $riffsyLink.append($riffsyImg);
                        $riffsyResults.append($riffsyLink);
                    })
                })
            },
            error: function(){
                console.log('Error');
            }
        });
    }
});


function Human(name, age, gender, height, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

function Worker(job, salary){
    this.job = job;
    this.salary = salary;
    this.earn = function(sum){
        salary += sum;
        return "Earn " + sum + ". All money " + salary;
    };
    this.__proto__ = new Human('Lenny', 45, 'male', 189, 87);
}

function Student(university, scholarship){
    this.university = university;
    this.scholarship = scholarship;
    this.watchSoap = function(soap){
        return "watching " + soap + " now.";
    };
    this.__proto__ = new Human('Bart', 16, 'male', 168, 60);
}

var Homer = new Human('Homer Simpson', 50, 'male', 178, 89);

var Lenny = new Worker('Nuclear Power Station', 200);

var Bart = new Student('Springfield School', 5);


var taskBtn = $('#task16-btn');
taskBtn.on('click', function(){
    console.log('Human', Homer.name, Homer.age, Homer.gender, Homer.height, Homer.weight);
    console.log('Worker', Lenny.name, 'is ' + Lenny.age + ' years old.');
    console.log('Student', Bart.name + ' is ' + Bart.watchSoap('Game of Thrones'));
});




