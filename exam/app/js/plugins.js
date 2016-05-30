$(function(){
    $('.main-carousel').flickity({
        // options
        //cellAlign: 'left',
        autoPlay: false,
        imagesLoaded: true,
        wrapAround: true,
        pageDots: false,
        contain: true,
        arrowShape: {
            x0: 10,
            x1: 50, y1: 40,
            x2: 50, y2: 35,
            x3: 15
        }
    });
});