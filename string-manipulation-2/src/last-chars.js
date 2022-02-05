/* exported lastChars */
/*
need to output the last x characters (in order) of the given string
assign empty string to a new variable (newString)
assign string length to new variable
for loop needs to start at x characters away from the end of the given string
starting point for  the for-loop is last index value minus given length
need to check if string is given (truthy)
need to check if string length is less than given value
if given value is greater than string length, starting point is 0
iterate through the string and add characters to empty string
return newString
*/

function lastChars(length, string) {
  var newString = '';
  var loopStop = string.length;
  var loopStart = string.length - length;
  if (string) {
    if (loopStart < 0) {
      loopStart = 0;
    }
    for (var x = loopStart; x < loopStop; x++) {
      newString += string[x];
    }
  }
  return newString;
}
