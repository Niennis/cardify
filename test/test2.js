
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

/*describe('getInImg()', () => {
  getInImg($('body').find('figure'));
  it('debería activar nuevo css al pasar por img', () => {
    assert.equal(isVowel('b'), false);
  });
  it('Deberia lanzar excepción con dos chars', () => {
    assert.equal(isVowel('ab'), false);
  });
});*/
