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
                answerItemCheckBox.setAttribute('name', 'question' + (i + 1) +'answer' + (j + 1));
                answerItemCheckBox.setAttribute('value', 'question' + (i + 1) +'answer' + (j + 1));
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


