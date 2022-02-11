var $h1 = document.querySelector('h1');
var $h3 = document.querySelector('h3');
var incorrectCounter = 0;
var currentIndex = 0;
var word = 'grumpy wizards make toxic brew';

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
  currentIndex = 0;
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
  if ($span[currentIndex].matches('.current') || $span[currentIndex].matches('.wrong')) {
    if (event.key === $span[currentIndex].innerText) {
      $span[currentIndex].className = 'correct';
      if ($span[word.length - 1].className === 'correct') {
        endGame();
      }
      $span[currentIndex + 1].className = 'current';
      currentIndex++;
    } else if (event.key !== 'Shift' && event.key !== 'CapsLock') {
      $span[currentIndex].className = 'wrong';
      incorrectCounter++;
    }
  }
}

function endGame() {
  $playAgain.className = 'row center';
  $h3.textContent = 'Incorrect: ' + incorrectCounter;
}
