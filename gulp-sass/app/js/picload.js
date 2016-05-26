$(function(){



    var searchBtn = $('#search-btn');
    var search = $('#search-input');

    searchBtn.on('click', function(){
        picLoad();
    });
    search.on('keypress', function(event){
       if (event.keyCode == 13) {
           picLoad();
       }
    });


    function picLoad(){
        var url = search.val() || "hedgehog";
        var x = [];
        $.ajax({
            method: 'GET',
            url: 'http://api.riffsy.com/v1/search?tag=' + url + '&limit=7',
            dataType: 'json'
        }).done(function(data){
            //console.log(data.results);
            _.forEach(data.results, function(item){
                //console.log(item.media);
                _.forEach(item.media, function(subItem){
                    x.push(subItem.gif.preview);
                })
            });
            console.log(x);



            _.forEach(x, function(item){
                console.log(item);
            })
        });
        //var html = $('#script').html();
        //var content = _.template(html);
        //var boxT = $('#test1');
        //boxT.append(content({
        //    data: x
        //}));

    }

    picLoad();
});