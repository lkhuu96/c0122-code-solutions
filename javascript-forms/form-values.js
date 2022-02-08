var $contactForm = document.querySelector('#contact-form');
var messageData = {};
$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log('messageData object:', messageData);
  $contactForm.reset();
});
