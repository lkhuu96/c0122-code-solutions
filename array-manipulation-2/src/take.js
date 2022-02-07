/* exported take */
/*
function needs to output x number of elements in a given array
create new empty array to hold x number of elements from original array
for loop to loop through array and add elements to empty array
stopping value is array length minus 1 (because array index starts at 0)
need to check if any elements are in the array
*/

function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var x = 0; x < count; x++) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
