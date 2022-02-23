function changeMessage() {
  var $message = document.querySelector('.message');
  $message.textContent = 'Hello There';
}

setTimeout(changeMessage, 2000);
