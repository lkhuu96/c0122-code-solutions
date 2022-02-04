/* exported filterOutStrings */
function filterOutStrings(values) {
  var notStrings = [];
  for (var x = 0; x < values.length; x++) {
    if (typeof values[x] !== 'string') {
      notStrings.push(values[x]);
    }
  }
  return notStrings;
}
