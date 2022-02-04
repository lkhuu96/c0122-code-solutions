/* exported compact */
/*
function takes an array and returns only the 'truthy' values
truthy are any values that are not falsy values (NaN, undefined, 0, etc)
create an empty array to store the truthy values
create a loop to check each value and see if it is truthy
create a variable with array length to create a stopping point for the loop
if the value is truthy, add to the array
return the new array
 */

function compact(array) {
  var newArray = [];
  var length = array.length;
  for (var x = 0; x < length; x++) {
    if (array[x]) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
