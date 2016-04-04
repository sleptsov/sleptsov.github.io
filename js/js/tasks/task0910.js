(function($) {
    $(function() {
        //Carousel
        $('[data-jcarousel]').each(function() {
            var el = $(this);
            el.jcarousel(el.data());
        });

        $('[data-jcarousel-control]').each(function() {
            var el = $(this);
            el.jcarouselControl(el.data());
        });
        $('.jcarousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();
                element.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                // Core configuration goes here
            })
            .jcarouselAutoscroll({
                interval: 3000,
                target: '+=1',
                autostart: true
            })
        ;
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

        //Nice Select Plugin
        $('select').niceSelect();

        // iCheck Plugin
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
            //increaseArea: '20%' // optional
        });
        // clear iCheck Plugin from other checkbox
        $('input.i-check-destroy').iCheck('destroy');


        // My-Dropdown menu
        $( '.my-dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );

    });
})(jQuery);