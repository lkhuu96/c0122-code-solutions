/* exported countdown */
function countdown(number) {
  var numbers = [];
  for (var x = number; x >= 0; x--) {
    numbers.push(x);
  }
  return numbers;
}
