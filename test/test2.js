
describe('createFigureInImg()', () => {
  var contenedor = 'body';
  createFigureInImg(contenedor);
  it('debería agregar un figure por cada img', () => {
    var countImg = $(contenedor).find('figure').length;
    var countFigures = $(contenedor).find('img').length;
    assert.equal(countImg, countFigures);
  });
  it('debería agregar cada figure como padre de cada img', () => {
    var countImg = $(contenedor).find('img').length;
    var count = 0;
    $('body').find('img').parent().each(function(i, el) {
      if ($(el).is('figure')) {
        count++;
      }
    });
    assert.equal(countImg, count);
  });
  it('Deberia tener un hermano llamado figcaption', () => {
    var countImg = $(contenedor).find('img').length;
    var countBrother = $('body').find('img').next().length; 
    assert.equal(countImg, countBrother);
  });
});

describe('hideFigcaption()', () => {
  var contenedor = 'body';
  hideFigcaption(contenedor);
  
  it('Debería esconder figcaption', () => {
    var figCaption = $(contenedor).find('figcaption');
    var count = 0;
    figCaption.each(function(i, el) {
      console.log($(el).css('display'));
      if ($(el).css('display') == 'none') {
        count++;
      }
    });
    // if (.css('display') == 'none') {
    //   count++;
    // }
    console.log(count, figCaption.length);
    assert.equal(count, figCaption.length);
  });
});

/* describe('getInImg()', () => {
  getInImg($('body').find('figure'));
  it('debería activar nuevo css al pasar por img', () => {
    assert.equal(isVowel('b'), false);
  });
  it('Deberia lanzar excepción con dos chars', () => {
    assert.equal(isVowel('ab'), false);
  });
});*/
