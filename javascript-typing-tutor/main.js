var $p = document.querySelector('p');

function makeSpan(string) {
  var createSpan = document.createElement('span');
  createSpan.textContent = string;
  return createSpan;
}

var word = 'grumpy wizard';
for (var x = 0; x < word.length; x++) {
  $p.appendChild(makeSpan(word[x]));
}
