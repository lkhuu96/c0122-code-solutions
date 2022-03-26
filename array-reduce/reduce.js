function reduce(array, reducer, initialValue) {
  var i = 0;
  if (arguments.length === 2) {
    i = 1;
    initialValue = array[0];
  }
  for (; i < array.length; i++) {
    initialValue = reducer(initialValue, array[i], i, array);
  }
  return initialValue;
}
