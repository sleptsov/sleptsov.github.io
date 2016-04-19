//My awesome carousel Jquery Plugin

(function($) {
    $.fn.myAwesomeCarousel = function(){

        var rightArrow = $('.my-carousel-right-control');
        var leftArrow = $('.my-carousel-left-control');
        var elementsList = $('.carousel-list');
        var elementsCount = elementsList.find('li').length;
        var pixelsOffset = 560;
        var currentLeftValue = 0;
        var maximumOffset = ((elementsCount - 1) * pixelsOffset);
        var minimumOffset = 0;

        rightArrow.on('click', function(){
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 560;
                elementsList.animate({ right : currentLeftValue + "px"}, 500);
            }
        });
        leftArrow.on('click', function(){
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 560;
                elementsList.animate({ right : currentLeftValue + "px"}, 500);
            }
        });

        return this;
    };
})(jQuery);