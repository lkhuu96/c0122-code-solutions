function countdown() {
  var $countdown = document.querySelector('.countdown-display');
  var num = parseInt($countdown.textContent);
  $countdown.textContent = num -= 1;
  if (num === 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countdown, 1000);
