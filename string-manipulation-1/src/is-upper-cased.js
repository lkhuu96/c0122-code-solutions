/* exported isUpperCased */
/*
Need to check if all characters in a string are uppercase
turn all characters in the string into upper case using method toUpperCase and store into variable upperCase
compare the original string to the upperCase string using strictly equal operator
if both are strictly equal, return true, if not, return false
*/

function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
