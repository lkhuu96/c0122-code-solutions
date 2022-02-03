/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }
  return sum;
}
