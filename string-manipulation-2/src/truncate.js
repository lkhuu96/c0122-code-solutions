/* exported truncate */
/*
function takes a string and a number, returns the string up to nth character plus ellipsis
create variable holding empty string to add characters to
check if any string is given
if string is given, check if string length is smaller than length given
if string length is smaller, only add characters up to string length
create a for loop that goes through each character of the string
add each character to the empty string variable
for loop stops at either given length or string length (whichever is smaller)
after loop is stopped, need to add ellipsis at the end of the word variable
return the word variable
*/

function truncate(length, string) {
  var newWord = '';
  var loopLength = length;
  if (string) {
    if (length > string.length) {
      loopLength = string.length;
    }
    for (var x = 0; x < loopLength; x++) {
      newWord += string[x];
    }
  }
  newWord += '...';
  return newWord;
}
