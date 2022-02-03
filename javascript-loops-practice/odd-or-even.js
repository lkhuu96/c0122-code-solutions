/* exported oddOrEven */
function oddOrEven(numbers) {
  var number = [];
  for (var x = 0; x < numbers.length; x++) {
    if ((numbers[x] % 2) === 0) {
      number.push('even');
    } else {
      number.push('odd');
    }
  }
  return number;
}
