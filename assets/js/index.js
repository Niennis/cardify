(function($) {
  
  $.fn.extend({
    cardify: function() {
      return this.each(function() {
        $(this).find('img').css({'width': '100%', 'height': '350px'});
        $(this).find('img').wrap('<figure></figure>');
        $(this).find('img').each(function(index, el) {
          var text = $(el).attr('alt');
          $(el).after('<figcaption class="text text-center">' + text + '</figcaption>');
        });
        console.log(this);
        $(this).find('figure').css({'width': '100%', 'display': 'inline-block'});
        $('.text').hide();
        $(this).find('figure').mouseover(function() {
          $(this).find('.text').show();
          $(this).find('.text').css({'position': 'absolute','top': '50%','left': '50%','transform': 'translateX(-50%) translateY(-50%)','margin': '0','text-align': 'center'});
          $(this).parent().css({'position': 'relative','z-index': '1','-webkit-transform':'scale(1.2)','-moz-transform':'scale(1.2)','-ms-transform':'scale(1.2)','-o-transform':'scale(1.2)','transform':'scale(1.2)'})
        });
        $(this).find('figure').mouseleave(function(event) {
          $(this).find('.text').hide();
          $(this).parent().css({'position': 'relative','z-index': '0','-webkit-transition':'scale(1.0)','-moz-transform':'scale(1.0)','-ms-transform':'scale(1.0)','-o-transform':'scale(1.0)','transform':'scale(1.0)'});
        });
      });
    }
  });
})(jQuery);