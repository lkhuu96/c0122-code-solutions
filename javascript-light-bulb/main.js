
var $lightBulb = document.querySelector('.light-bulb-on');
var $background = document.querySelector('.background-on');
$lightBulb.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  if (event.target.className === 'light-bulb-shape light-bulb-on') {
    $lightBulb.className = 'light-bulb-shape light-bulb-off';
    $background.className = 'background-off';
  } else {
    $lightBulb.className = 'light-bulb-shape light-bulb-on';
    $background.className = 'background-on';
  }
}
