function handleFocus(event) {
  console.log('focus event fired');
  console.log('focus target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('blur target.name', event.target.name);
}

function handleInput(event) {
  console.log('input target.name', event.target.name);
  console.log('input target.value', event.target.value);
}

var $inputName = document.querySelector('#user-name');
var $inputEmail = document.querySelector('#user-email');
var $textareaMessage = document.querySelector('#user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);
$textareaMessage.addEventListener('focus', handleFocus);
$textareaMessage.addEventListener('blur', handleBlur);
$textareaMessage.addEventListener('input', handleInput);
