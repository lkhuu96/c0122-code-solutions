/* exported firstChars */
/*
need to output x amount of charactrs from the given string
assign empty string to a new variable (newString)
create stopping value for for-loop (given length from argument)
for loop to iterate through the string and add characters up to defined length
check if a string is given (truthy), if so
check to see if given length is longer than string length
if string length is smaller, set for loop stopping value to string length
if given length is smaller, set for loop stopping value to given length
add each character to the new string until stopping value is reached
return new string
*/

function firstChars(length, string) {
  var newString = '';
  var loopStop = length;
  if (string) {
    if (loopStop > string.length) {
      loopStop = string.length;
    }
    for (var x = 0; x < loopStop; x++) {
      newString += string[x];
    }
  }
  return newString;
}
