define('model', [],
    function(){
        function Model(data){

            var self = this;

            self.data = data;

            self.addItem = function(item){
                if (item.length == 0){
                    return;
                }
                self.data.push(item);
                localStorage.setItem('ToDo', self.data);
                console.log(item + ' added to List');
                return self.data;
            };

            self.editItem = function(itemOld, itemNew) {
                var index = self.data.indexOf(itemOld);
                self.data.splice(index, 1, itemNew);
                localStorage.setItem('ToDo', self.data);
                console.log('Item ' + itemOld + ' edit to ' + itemNew);
                return self.data;
            };

            self.removeItem = function (item) {
                var index = self.data.indexOf(item);
                if (index == -1){
                    return;
                }
                self.data.splice(index, 1);
                localStorage.setItem('ToDo', self.data);
                console.log('Item ' + item + ' with Index ' + index + ' removed from List');
                return self.data;
            };
        }

        return Model;
    }

);