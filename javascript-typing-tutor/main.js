var $h1 = document.querySelector('h1');
var $h3 = document.querySelector('h3');
var incorrectCounter = 0;
var word = 'grumpy wizards';
for (var x = 0; x < word.length; x++) {
  $h1.appendChild(makeSpan(word[x]));
}

var $span = document.querySelectorAll('span');
document.addEventListener('keydown', checkKey);
var $playAgain = document.querySelector('#play-again');

startGame();
var $button = document.querySelector('button');
$button.addEventListener('click', startGame);

function startGame() {
  $span[0].className = 'current';
  $playAgain.className = 'row center hide';
  incorrectCounter = 0;
  for (var z = 1; z < word.length; z++) {
    $span[z].className = '';
  }
}

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
        if ($span[word.length - 1].className === 'correct') {
          endGame();
        }
        $span[y + 1].className = 'current';
        return;
      } else {
        $span[y].className = 'wrong';
        incorrectCounter++;
        return;
      }
    }
  }
}

function endGame() {
  $playAgain.className = 'row center';
  $h3.textContent = 'Incorrect: ' + incorrectCounter;
}
