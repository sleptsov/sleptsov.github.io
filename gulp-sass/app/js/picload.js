$(function(){

    var searchBtn = $('#search-btn');
    var search = $('#search-input');
    var searchForm = $('#search-form');

    searchForm.on('submit', function(e){
        e.preventDefault();
        picLoad();
        search.val(null);
    });


    function picLoad(){
        var API_KEY = '2656040-f05774d228b0892738e531ccc';
        var url = search.val() || "holiday activity";
        var results = [];
        $.ajax({
            method: 'GET',
            url: "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(url),
            dataType: 'json'
        }).done(function(data){
            //console.log(data);
            if (data.totalHits > 0){
                var arraySliceToSeven = _.slice(data.hits, 0, 7);
                _.forEach(arraySliceToSeven, function(item){
                    results.push(_.pick(item, ['webformatURL', 'tags']));
                });
                // Grab the template script
                var theTemplateScript = $("#address-template").html();
                // Compile the template
                var theTemplate = Handlebars.compile(theTemplateScript);
                // Define our data object
                var context = {
                    data: results
                };
                // Pass our data to the template
                var theCompiledHtml = theTemplate(context);
                // Add the compiled html to the page
                $('.content-placeholder').html(theCompiledHtml);
                $('#search-message').html('Discover holiday activity ideas');
            } else {
                $('#search-message').html('No hits for '+ url +' found. Try again!');
                $('.content-placeholder').html('');
            }
        });
    }
    picLoad();
});