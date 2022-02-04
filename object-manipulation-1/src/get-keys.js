/* exported getKeys */
/*
need to return an array of the keys in the object
declare an empty array to assign the keys into
use for-in loop to get keys
add each key into the array
return the new array
*/

function getKeys(object) {
  var newArray = [];
  for (var keys in object) {
    newArray.push(keys);
  }
  return newArray;
}
