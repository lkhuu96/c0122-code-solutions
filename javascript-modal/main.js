var $open = document.querySelector('.open-button');
var $close = document.querySelector('.no-button');
var $popupDisplay = document.querySelector('.popup-background');
var popup = false;
var popupClass = 'row center popup-background';

$open.addEventListener('click', openOrClosePopup);
$close.addEventListener('click', openOrClosePopup);

function openOrClosePopup(event) {
  if (popup === false) {
    $popupDisplay.className = popupClass;
    popup = true;
  } else {
    $popupDisplay.className = popupClass + ' no-display';
    popup = false;
  }
}
