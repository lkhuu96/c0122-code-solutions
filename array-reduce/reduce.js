function reduce(array, reducer, initialValue) {
  let initial = array[0];
  let start = 1;
  if (Number.isInteger(initialValue)) {
    initial = initialValue;
    start = 0;
  }
  for (let i = start; i < array.length; i++) {
    initial = reducer(initial, array[i]);
  }
  return initial;
}
