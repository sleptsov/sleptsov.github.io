$(function(){
    $('body').append('<a href="#" class="to-top-btn">to Top</a>');

    $(window).scroll(function() {
        if ( $(window).scrollTop() > 400 ) {
            $('.to-top-btn').fadeIn('slow');
        } else {
            $('.to-top-btn').fadeOut('slow');
        }
    });
    $('.to-top-btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});