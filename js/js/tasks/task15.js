

$(function() {
    console.log( "ready!" );
    $( "#target" ).keypress(function(e) {
        if (e.keyCode == 13){
            console.log( "Handler for .keypress() called." );

        }
    });


});