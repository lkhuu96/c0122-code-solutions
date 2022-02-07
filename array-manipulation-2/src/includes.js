/* exported includes */
/*
function needs to check if given value is in the given array
set variable to boolean false to only change if element is in array
need to check if array is empty
if not empty, need to loop through array and see if value is within array
stop loop at last index of array (array.length)
set boolean variable to true if value is in array
return the boolean variable value
*/

function includes(array, value) {
  var isInArray = false;
  if (array.length > 0) {
    for (var x = 0; x < array.length; x++) {
      if (value === array[x]) {
        isInArray = true;
      }
    }
  }
  return isInArray;
}
