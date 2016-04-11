$().ready(function(){

   //Tooltip v.1
   $('.sing-up-form :input').hover(function(){
      $('body').append('<p class="my-tooltip"></p>'); //Add tooltip box
      $('.my-tooltip').fadeIn(300);
   }, function(){
      $('.my-tooltip').fadeOut(300, function(){
         $(this).remove();
      }); //Remove tooltip box
   }).mousemove(function(e){
      var mousex = e.pageX + 20; //Get X coordinates
      var mousey = e.pageY + 10; //Get Y coordinates
      var tooltipText = $(this).attr('data-my-tooltip') || 'Input field';//Read text from custom attribute
      $('.my-tooltip')
          .text(tooltipText)
          .css({ display: 'block', top: mousey, left: mousex });//Set tooltip position
   });

   //Tooltip v.2
   $('.details-form :input').focus(function(){
      $(this).next().delay(800).fadeIn(300);
   })
   .blur(function(){
      $(this).next().fadeOut(300);
   });
   $('#show-help').click(function(e){
      e.preventDefault();
      $('.my-tooltip-inline').fadeToggle(300);
      $(this).text(function(i, text){
         return text === "Show help" ? "Hide help" : "Show help"; // it`s magic, but it works
      });
   })
});

//Tabs
(function($) {
   $(function() {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
         $(this)
             .addClass('active').siblings().removeClass('active')
             .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
   });
})(jQuery);