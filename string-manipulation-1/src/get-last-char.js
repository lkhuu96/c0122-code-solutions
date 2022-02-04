/* exported getLastChar */
/*
get last char from argument
last char = last index
last index = length of argument minus one
store last index into a variable
return the last char of argument
 */

function getLastChar(string) {
  var lastIndex = (string.length - 1);
  return string[lastIndex];
}
