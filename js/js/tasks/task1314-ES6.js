'use strict';

 let app = {
    saveToLocalStorage: data => {
        let task20Data = JSON.stringify(data); // object to string

        //First check browser support for localStorage
        if(typeof(localStorage) !== "undefined") {

            // check if already saved before
            if (localStorage.task20Data == undefined){
                localStorage.setItem('task20Data', task20Data);
            }
        }
        return task20Data;

    },
    getFromLocalStorage: data => {
        let r = JSON.parse(localStorage.getItem(data));
        return r;
    }

};


app.saveToLocalStorage([{name: 'Den', age: 30}, {name: 'Sad', age: 30}]);
console.log(app.getFromLocalStorage('task20Data'));
