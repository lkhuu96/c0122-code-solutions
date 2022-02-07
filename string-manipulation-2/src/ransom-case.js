/* exported ransomCase */
/*
return a string with every other word upper case
start off with lower case letter, then alternate to upper case
ie even values are lower case, odd values are upper case
assign empty string to a variable to store the string
for loop to iterate through each character
stop the for loop at the last string index (find by using string length)
if iteration is divisible by 2 (ie even) character should be lower case and added
  to the word variable
if iteration is not divisible by 2 (ie odd) character should be upper case and
  added to word variable
return the new string
*/

function ransomCase(string) {
  var newString = '';
  for (var x = 0; x < string.length; x++) {
    if ((x % 2) === 0) {
      newString += string[x].toLowerCase();
    } else {
      newString += string[x].toUpperCase();
    }
  }
  return newString;
}
