/* exported dropRight */
/*
Need to omit the last x elements in an array
new empty array literal variable to hold new array values
for loop to iterate through the array and add each element to a new array
need to stop array to cut off the x elements from the right
stopping value would be length of array minus number given
start value is first value of index
add array element to the new array
*/

function dropRight(array, count) {
  var newArray = [];
  var stopLoop = array.length - count;
  if (array.length > 0) {
    for (var x = 0; x < stopLoop; x++) {
      newArray.push(array[x]);
    }
  }
  return newArray;
}
