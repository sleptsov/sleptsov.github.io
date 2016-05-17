$(function(){

    $('#task20-btn').on('click', function () {
        $.ajax({
                url: 'js/tasks/scriptDataForTask20.js',
                type: 'GET',
                dataType: 'json'
            })
            .done(function (data) {
                console.log('data.json', data);
                skillsArr(data);
                namesArr(data);
                friendsArr(data);
            });
    });


    function skillsArr(data){
        var t = _.map(data, 'skills');
        var c = [];
        _(t).forEach(function(item){
            _(item).forEach(function (i) {
                c.push(i);
                return c;
            });
        });
        var x = _.uniq(c);
        x.sort();
        console.log('1. Sorted array of all unique skills from data.json' , x);
    }

    function namesArr(data) {
        var x = [];
        _.forEach(data, function (item) {
            x.push(_.pick(item, ['name', 'friends']));
        });

        var o = _.sortBy(x, function (p) {
            return p.friends.length;
        });
        var result = _.map(o, 'name');
        console.log('2. Array of names sort by friends (in increasing order)', result);
    }

    function friendsArr(data){

        var t = _.map(data, 'friends');
        var c = [];
        _(t).forEach(function(item){
            _(item).forEach(function (i) {
                c.push(i.name);
            });
        });
        var x = _.uniq(c);
        console.log('3. Array of all unique friends from data.json', x)
    }
});