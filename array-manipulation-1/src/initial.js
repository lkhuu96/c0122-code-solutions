/* exported initial */
/*
return the array minus the last element
declare a new array literal that is empty
find out what the last element index number is (use array.length - 1)
loop through the array and add each element to the new empty array
stop the loop when it reaches the last index number
return the new array
*/

function initial(array) {
  var newArray = [];
  var lastIndex = array.length - 1;
  for (var x = 0; x < lastIndex; x++) {
    newArray.push(array[x]);
  }
  return newArray;
}
