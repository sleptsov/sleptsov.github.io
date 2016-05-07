$(function(){
    var url;
    var $riffsyResults = $("#riffsy-results");

    $('#riffsy-search').on('keypress', function(e){
       if(e.keyCode == 13){
           searchRiffsyGif();
       }
    });

    $("#riffsy-btn").on('click', function(){
       searchRiffsyGif();
    });

    function searchRiffsyGif(){
        url = $("#riffsy-search").val();
        $.ajax({
            method: "GET",
            url: "http://api.riffsy.com/v1/search?tag=" + url + "&limit=10",
            dataType: "json",
            success: function(data){
               //console.log(data.results);
                $.each(data.results, function(i, riff){
                   // console.log(riff.url);
                    $.each(riff.media, function(i, newRiff){
                       //console.log(newRiff.nanogif.preview);

                        var $riffsyLink = $('<a href='+ riff.url + ' target="_blank" ' + '></a>');
                        var $riffsyImg = $('<img '+ 'src=' + newRiff.nanogif.url + ' class="img-thumbnail riffsy-img" ' + '>');
                        $riffsyLink.append($riffsyImg);
                        $riffsyResults.append($riffsyLink);
                    })
                })
            },
            error: function(){
                console.log('Error');
            }
        });
    }
});

