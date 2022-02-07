console.log('hello, world');

var h1Selector = document.querySelector('h1');
console.log('$heading:', h1Selector);
console.dir(h1Selector);

var expSelector = document.querySelector('#explanation');
console.log('$explanation:', expSelector);
console.dir(expSelector);

var hintSelector = document.querySelector('.hint');
console.log('$hint:', hintSelector);
console.dir(hintSelector);

var pSelector = document.querySelectorAll('p');
console.log('$paragraphs', pSelector);

var exLinkSelector = document.querySelectorAll('.example-link');
console.log('$links:', exLinkSelector);
