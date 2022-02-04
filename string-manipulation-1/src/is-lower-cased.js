/* exported isLowerCased */
/*
need to check if passed word is all lower case
store word into new variable and turn into lower case (var lowerCase)
check if original word and lowerCase variable are strictly equal
if they are strictly equal, return true, if they are not strictly equal return false.
*/

function isLowerCased(word) {
  var lowerCase = word.toLowerCase();
  if (word === lowerCase) {
    return true;
  } else {
    return false;
  }
}
