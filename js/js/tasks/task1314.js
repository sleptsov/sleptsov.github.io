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