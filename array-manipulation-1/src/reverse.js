/* exported reverse */
/*
need to return the original array elements in reverse order
create a new empty array literal to store the new array values
reading the array from right to left
right most array is the highest index
assign the highest index to a variable
add each value into the new array starting at the highest index
decrease the index value by one to add the next highest element
return the new array with reverse ordered elements
*/

function reverse(array) {
  var newArray = [];
  var lastIndex = array.length - 1;
  for (var x = lastIndex; x >= 0; x--) {
    newArray.push(array[x]);
  }
  return newArray;
}
