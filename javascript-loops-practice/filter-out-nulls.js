/* exported filterOutNulls */
function filterOutNulls(values) {
  var notNull = [];
  for (var x = 0; x < values.length; x++) {
    if (values[x] !== null) {
      notNull.push(values[x]);
    }
  }
  return notNull;
}
