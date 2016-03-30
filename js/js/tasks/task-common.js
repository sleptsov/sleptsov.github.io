$(document).ready(function(){
    $('#logo-img').click(function(){
        console.log('Logo clicked');
        $('div.panel-collapse').collapse('toggle');
    });
});