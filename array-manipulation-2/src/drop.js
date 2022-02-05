/* exported drop */
/*
function needs to return array without the first x elements
new empty array to hold new array elements
check if any elements are in array, if not exit loop and return empty array
start array at position that omits the first x elements
starting position should be at the given number
stop loop at last index of array (array.length)
return new array
*/

function drop(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var x = count; x < array.length; x++) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
