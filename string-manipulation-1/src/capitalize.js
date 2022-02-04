/* exported capitalize */

/*
return first char of string as capital
first char = first index (0)
store first char into variable (toUpper)
store the rest of the string into another variable by adding each char to the variable (toLower)
use for loop starting at index 1 until string.length to store the rest of the string
use .toUpperCase method on toUpper variable and store into another variable (upper)
use .toLowerCase method on toLower variable and store into another variable (lower)
concatenate upper and lower and assign to variable newWord
return newWord
*/

function capitalize(word) {
  var toUpper = word[0];
  var toLower = '';
  for (var x = 1; x < word.length; x++) {
    toLower += word[x];
  }
  var upper = toUpper.toUpperCase();
  var lower = toLower.toLowerCase();
  var newWord = upper + lower;
  return newWord;
}
