var $userList = document.querySelector('#user-list');

loadXhr();

function loadXhr() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('xhr status', xhr.status);
    console.log('xhr response', xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      $userList.appendChild(createLi(xhr.response[i]));
    }
  });
  xhr.send();
}

function createLi(object) {
  var newLi = document.createElement('li');
  newLi.textContent = object.name;
  return newLi;
}
