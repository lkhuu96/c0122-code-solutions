/* exported capitalizeWords */
/*
need to capitalize every word
each word is separated by a space (' ')
first word has no space before, so first index should be capitalized
capitalize the first letter and assign it to a variable
for loop to add each character starting at the second index to the new variable
  with the capitalized letter
if the index before the current index was a space, capitalize the letter and
  add the letter to the new string variable
if there is no space before the current index, make the current character a lower case
stop for loop at the last string index value (string.length)
return the new string
*/

function capitalizeWords(string) {
  var newString = string[0].toUpperCase();
  for (var x = 1; x < string.length; x++) {
    if (string[x - 1] === ' ') {
      newString += string[x].toUpperCase();
    } else {
      newString += string[x].toLowerCase();
    }
  }
  return newString;
}
