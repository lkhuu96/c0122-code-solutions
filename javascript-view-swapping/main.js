var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
var isActive = 'tab';
var isHidden = 'view';
$tabContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var x = 0; x < $tab.length; x++) {
    if (event.target === $tab[x]) {
      $tab[x].className = isActive + ' active';
    } else {
      $tab[x].className = isActive;
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (var y = 0; y < $view.length; y++) {
    if ($dataView === $view[y].getAttribute('data-view')) {
      $view[y].className = isHidden;
    } else {
      $view[y].className = isHidden + ' hidden';
    }
  }
});
