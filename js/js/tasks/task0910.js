(function($) {
    $(function() {
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

        $('select').niceSelect(); //Nice Select Plugin

        // iCheck Plugin
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue'
            //increaseArea: '20%' // optional
        });

        $('input.i-check-destroy').iCheck('destroy');

    });
})(jQuery);