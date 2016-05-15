//MVC

//model
function Model(data){

    var self = this;

    self.data = data;

    self.addItem = function(item){
            if (item.length == 0){
                return;
            }
            self.data.push(item);
            localStorage.setItem('ToDo', self.data);
            //console.log(self.data);
            return self.data;
    };

    self.editItem = function(itemOld, itemNew) {
        var index = self.data.indexOf(itemOld);
        console.log(index);

        console.log(itemNew);
        self.data.splice(index, 1, itemNew);
        localStorage.setItem('ToDo', self.data);
        console.log(self.data);
        return self.data;
    };

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);
        if (index == -1){
            return;
        }
        self.data.splice(index, 1);
        localStorage.setItem('ToDo', self.data);
        //console.log(self.data);

        return self.data;
    };
}

//View

function View(model){
    var self = this;

    function init() {

        var wrapper = tmpl($('#wrapper-template').html());

        $('#todo-task').append(wrapper);

        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };

        self.renderList(model.data);
    }

    self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    };

    init();
}


// Controller

function Controller(model, view) {
    var self = this;

    view.elements.input.on('keypress', function(e){
       if (e.keyCode == 13) {
           addItem();
       }
    });

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('dblclick', '.displayed-item', editItem);


    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem(){
        var item = $(this).attr('data-value');
        console.log($(this).parent());
        $(this).closest('li').fadeOut(300, function(){
            console.log('slide');
            model.removeItem(item);
            view.renderList(model.data);
        });
    }

    function editItem(){
        var itemOld = $(this).attr('data-value');
        $(this).hide().siblings(".item-edit-field").show().val($(this).text()).focus();
        $('.item-edit-field').on('focusout ', function(){
            $(this).hide().siblings(".displayed-item").show().text($(this).val());
            var itemNew = $(this).val();
            model.editItem(itemOld, itemNew);
            view.renderList(model.data);
        });
    }
}

$(function(){
    if (localStorage.ToDo == undefined || localStorage.ToDo == ''){
        localStorage.setItem('ToDo', ['Default task']);
    }
    var toDoList = localStorage.getItem('ToDo').split(',');
    var model = new Model(toDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});