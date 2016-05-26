$(function(){

    $.ajax({
            url: 'js/tasks/scriptDataForTask20.js',
            type: 'GET',
            dataType: 'json'
        })
        .done(function (data) {
            //console.log('data.json', data);
            skillsArr(data);
            namesArr(data);
            friendsArr(data);
        });

    function skillsArr(data){
        var desc = '1. Sorted array of all unique skills from data.json';
        var skillsArrRes = (_.uniq(_.flattenDeep(_.map(data, 'skills')))).sort();
        //console.log(desc , skillsArrRes);
        renderArrResults(skillsArrRes, desc);
    }

    function namesArr(data) {
        var desc = '2. Array of names sort by friends (in increasing order)';
        var x = [];
        _.forEach(data, function (item) {
            x.push(_.pick(item, ['name', 'friends']));
        });

        var o = _.sortBy(x, function (p) {
            return p.friends.length;
        });
        var namesArrRes = _.map(o, 'name');
        //console.log(desc, namesArrRes);
        renderArrResults(namesArrRes, desc);
    }

    function friendsArr(data){

        var desc = '3. Array of all unique friends from data.json';
        var t = _.map(data, 'friends');
        var c = [];
        _(t).forEach(function(item){
            _(item).forEach(function (i) {
                c.push(i.name);
            });
        });
        var friendsArrRes = _.uniq(c);
        //console.log(desc, friendsArrRes);
        renderArrResults(friendsArrRes, desc);
    }

    function renderArrResults(result, desc){
        var box = $('#task20-box');
        var title = $('<h4></h4>').text(desc);
        var resArr = $('<p></p>').text(JSON.stringify(result));
        box.append(title);
        box.append(resArr);
    }
});