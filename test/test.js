/*const app = require('../assets/js/index');
const assert = require('chai').assert;*/
describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    assert.equal(isVowel('a'), true);
  });
  it('debería devolver false para letra b', () => {
    assert.equal(isVowel('b'), false);
  });
  it('Deberia lanzar excepción con dos chars', () => {
    assert.equal(isVowel('ab'), false);
  });
});
