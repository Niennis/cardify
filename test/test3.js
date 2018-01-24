describe('hideFigcaption()', () => {
  var contenedor = 'body';
  
  it('Debería esconder figcaption', () => {
    var figCaption = $(contenedor).find('figcaption');
    var count = 0;
    if (figCaption.each().css('display') == 'none') {
      count++;
    }
    assert.equal(count, figCaption.length);
  });
});
  