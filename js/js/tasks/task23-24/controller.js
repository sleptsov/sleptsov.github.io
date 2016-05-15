define('controller', [],
    function(){
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
                $(this).closest('li').fadeOut(300, function(){
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
        return Controller;

    }

);