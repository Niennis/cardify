// const app = require('../test/index');
// const assert = require('chai').assert;

// describe('cardify()', () => {
//   it('debería devolver true para letra a', () => {
//     assert.equal(app.cardify('a'), true);
//   });
//   it('debería devolver false para letra b', () => {
//     assert.equal(app.cardify('b'), false);
//   });
//   it('debería lanzar excepción con dos chars', () => {
//     assert.equal(app.cardify('ab'), false);
//   });
// });

const app = require('index');
//var assert = require('chai').assert;

describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    assert.equal(app.isVowel('a'), true)
  });
  it('debería devolver false para letra b', () => {
    assert.equal(app.isVowel('b'), false)
  });
  it('debería lanzar excepción con dos chars',() => {
    assert.equal(app.isVowel('ab'), false)
  });
});
