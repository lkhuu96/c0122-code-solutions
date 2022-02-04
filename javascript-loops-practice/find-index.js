/* exported findIndex */
function findIndex(array, value) {
  var hasNumber = -1;
  for (var x = 0; x < array.length; x++) {
    if (array[x] === value) {
      hasNumber = x;
      break;
    }
  }
  return hasNumber;
}
