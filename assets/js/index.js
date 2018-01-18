(function($) {
  
  $.fn.extend({
    cardify: function() {
      return this.each(function() {
        $(this).find('img').css({'width': '100%'});
        $(this).find('img').wrap('<figure></figure>');
        $(this).find('img').each(function(index, el) {
          var text = $(el).attr('alt');
          $(el).after('<figcaption class="text text-center">' + text + '</figcaption>');
        });
        console.log(this);
        $(this).find('figure').css({'width': '33%', 'display': 'inline-block'});
        $('.text').hide();
        $(this).find('figure').mouseover(function() {
          $(this).find('.text').show();
        });
        $(this).find('figure').mouseleave(function(event) {
          $(this).find('.text').hide();
        });
      });
    }
  });
})(jQuery);