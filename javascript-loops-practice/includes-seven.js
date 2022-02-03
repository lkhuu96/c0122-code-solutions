/* exported includesSeven */
function includesSeven(array) {
  var hasSeven = false;
  for (var x = 0; x < array.length; x++) {
    if (array[x] === 7) {
      hasSeven = true;
    }
  }
  return hasSeven;
}
