var images = ['001', '004', '007', '025', '039'];
var index = 0;
var rotate = null;
var $row = document.querySelector('.row');
var $imgSrc = document.querySelector('img');
var $progress = document.querySelector('#progress');
var currentCircle = 'fas fa-circle';
var emptyCircle = 'far fa-circle';

for (var i = 0; i < images.length; i++) {
  $progress.appendChild(createProgress(i));
}

var $circles = document.querySelectorAll('.fa-circle');
$circles[index].className = currentCircle;

$row.addEventListener('click', manualRotate);
$progress.addEventListener('click', changeProgress);

resetInterval();

function manualRotate(event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  resetInterval();
  if (event.target.id === 'prev') {
    index--;
  } else {
    index++;
  }
  cycle();
}

function autoRotate() {
  index++;
  cycle();
}

function cycle() {
  var last = images.length - 1;
  if (index < 0) {
    index = last;
  } else if (index > last) {
    index = 0;
  }
  var $currentCircle = document.querySelector('.fas');
  $currentCircle.className = emptyCircle;
  $circles[index].className = currentCircle;
  $imgSrc.setAttribute('src', 'images/' + images[index] + '.png');
}

function changeProgress(event) {
  resetInterval();
  if (event.target.tagName !== 'I') {
    return;
  }
  var iconIndex = event.target.id;
  index = parseInt(iconIndex);
  cycle();
}

function resetInterval() {
  clearInterval(rotate);
  rotate = setInterval(autoRotate, 3000);
}

function createProgress(idNumber) {
  var createIcon = document.createElement('i');
  createIcon.setAttribute('class', 'far fa-circle');
  createIcon.setAttribute('id', idNumber);
  return createIcon;
}
