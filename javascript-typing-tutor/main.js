var $h1 = document.querySelector('h1');
// var incorrectCounter = 0;
var word = 'grumpy wizards make toxic brew';

for (var x = 0; x < word.length; x++) {
  $h1.appendChild(makeSpan(word[x]));
}
var $span = document.querySelectorAll('span');
$span[0].className = 'current';
document.addEventListener('keydown', checkKey);

function makeSpan(string) {
  var createSpan = document.createElement('span');
  createSpan.textContent = string;
  return createSpan;
}

function checkKey(event) {
  for (var y = 0; y < $span.length; y++) {
    if ($span[y].matches('.current') || $span[y].matches('.wrong')) {
      if (event.key === $span[y].innerText) {
        $span[y].className = 'correct';
        $span[y + 1].className = 'current';
        return;
      } else {
        $span[y].className = 'wrong';
        // incorrectCounter++;
        return;
      }
    }
  }
}
