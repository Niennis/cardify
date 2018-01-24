// const assert = require('chai').assert;

var html = '<!doctype html><html><body><img src="" alt=""></body></html>';

const  jsdom  =  require('jsdom');
const { JSDOM } = jsdom;
const { window } = (new JSDOM(html)).window;


// var window = document.defaultView;
// global.window = window;
// global.window.document = document;
var $ = global.jQuery = require('jquery')(window);

// const window = dom.parentWindow;
// global.$ = require('jquery')(window);
// console.log(dom.window.document.querySelector("body").textContent);

const app = require('../assets/js/index');
app.createFigureInImg($('body'));


describe('isVowel()', () => {

  it('works', function() {
    document.body.innerHTML = '<div>hola</div>';
    expect($('div').html()).eql('hola');
  });

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
