require(['model', 'view', 'controller'],
    function(model, view, controller){
        if (localStorage.ToDo == undefined || localStorage.ToDo == ''){
            localStorage.setItem('ToDo', ['Default task']);
        }
        var toDoList = localStorage.getItem('ToDo').split(',');
        var m = new model(toDoList);
        var v = new view(m);
        var c = new controller(m, v);
    }
);