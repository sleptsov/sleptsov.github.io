$(function(){

    $('.accordion__item').on('click', '.accordion-link:not(.active)', function(e){
        e.preventDefault();
        $('.accordion-link').removeClass('active');
        $('.accordion-panel').slideUp(400).removeClass('show');
        $(this).addClass('active');
        $(this).next('.accordion-panel').slideDown(400).addClass('show');
    });

});