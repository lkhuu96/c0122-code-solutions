/* exported takeRight */
/*
function needs return the x number of elements from the right in the order they
  were in from the original array
assign empty array literal into new variable to hold new array items later
check if number given is larger than the array
if number is larger than array, start value is set to first index of array
if not, starting position is length of array minus number given
stop loop at last index of array
last index of array is array.length minus one
for loop to iterate through the array starting at x elements from the right
add each array element to the new empty array variable
return the new array
*/

function takeRight(array, count) {
  var newArray = [];
  var startLoop = array.length - count;
  if (startLoop < 0) {
    startLoop = 0;
  }
  for (var x = startLoop; x < array.length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
