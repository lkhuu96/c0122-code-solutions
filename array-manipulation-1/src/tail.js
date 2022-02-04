/* exported tail */
/*
need to return all elements in array except the first one
create empty array to store new array elements (all array values except the first)
find array length and store it into a variable to tell loop when to stop
start at second index (index value of 1)
loop through the remaining array values and store them into the new empty array
return the new (no longer empty) array
*/

function tail(array) {
  var newArray = [];
  var length = array.length;
  for (var x = 1; x < length; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
