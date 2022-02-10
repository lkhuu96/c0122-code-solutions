
var $lightBulb = document.querySelector('.light-bulb-on');
var $background = document.querySelector('.background-on');
$lightBulb.addEventListener('click', lightSwitch);
var isLightOn = true;

function lightSwitch(event) {
  if (isLightOn === true) {
    $lightBulb.className = 'light-bulb-shape light-bulb-off';
    $background.className = 'background-off';
    isLightOn = false;
  } else {
    $lightBulb.className = 'light-bulb-shape light-bulb-on';
    $background.className = 'background-on';
    isLightOn = true;
  }
}
