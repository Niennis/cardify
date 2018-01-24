// (function() {  
//   $.fn.extend({
//     cardify: function() {
//       return this.each(function() {
//         $(this).find('img').css({'width': '100%'});
//         $(this).find('img').wrap('<figure></figure>');
//         $(this).find('img').each(function(index, el) {
//           var text = $(el).attr('alt');
//           $(el).after('<figcaption class="text text-center">' + text + '</figcaption>');
//         });

//         // ocultar text de figcaption
//         $('.text').hide();

//         $(this).find('figure').css({'width': '100%', 
//           'display': 'inline-block', 
//           'color': 'white'});

//         // Al pasar por la imagen cambia
//         $(this).find('figure').mouseover(bigImg); 
//         // Al salir de la imagen cambia
//         $(this).find('figure').mouseleave(function(event) {
//           $(this).find('.text').hide();

//           $(this).parent().css({'position': 'relative',
//             'z-index': '0',
//             '-webkit-transition': 'scale(1.0)',
//             '-moz-transform': 'scale(1.0)',
//             '-ms-transform': 'scale(1.0)',
//             '-o-transform': 'scale(1.0)',
//             'transform': 'scale(1.0)'});
//           $(this).find('figure').css({'display': 'none', 
//             'background-color': 'transparent'});
//           $(this).find('img').css({'filter': 'brightness(100%)', 
//             '-webkit-filter': 'brightness(100%)'}); 
//         });
//       });
//     }
//   });
// })(jQuery);

// function bigImg() { 
//   $(this).find('.text').show();
  
//   $(this).find('.text').css({'position': 'absolute',
//     'top': '50%',
//     'left': '50%',
//     'transform': 'translateX(-50%) translateY(-50%)',
//     'margin': '0',
//     'text-align': 'center',
//     'font-weight': 'bold',
//     'font-size': '2em'});
//   $(this).find('img').css({'filter': 'brightness(30%)', 
//     '-webkit-filter': 'brightness(30%)',
//     '-moz-filter': 'brightness(30%)', 
//     '-o-filter': 'brightness(30%)',
//     '-ms-filter': 'brightness(30%)',
//     'filter': 'grayscale(30%)',
//     'filter': 'url(grayscale.svg)', // Firefox 4+ 
//     'filter': 'gray' // IE 6-9
//   });
//   $(this).parent().css({'position': 'relative',
//     'z-index': '1', 
//     '-webkit-transform': 'scale(1.2)',
//     '-moz-transform': 'scale(1.2)',
//     '-ms-transform': 'scale(1.2)',
//     '-o-transform': 'scale(1.2)',
//     'transform': 'scale(1.2)'});
// };


const vocals = ['a', 'e', 'i', 'o', 'u'];

module.exports = {
  isVowel: function(charToTest) {
    return vocals.indexOf(charToTest) >= 0;
  },
};
