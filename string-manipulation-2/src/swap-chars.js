/* exported swapChars */
/*
function needs to swap characters from given index values in a string and return
  the new string
assign empty string to new variable to hold new string value
for loop to iterate through the string
add each character to new string
if index value is equal to firstIndex, add string at secondIndex instead
if index value is equal to secondIndex, add string at firstIndex instead
return newString
*/

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var x = 0; x < string.length; x++) {
    if (x === firstIndex) {
      newString += string[secondIndex];
    } else if (x === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[x];
    }
  }
  return newString;
}
