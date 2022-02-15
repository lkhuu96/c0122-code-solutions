/* exported unique */
/*
return unique values, remove duplicates
create empty array container (newArray)
create boolean to keep track of values that match
check if an array given has any elements
loop through array elements
check each element in original array with eahc newArray element
if original element is NOT in the newArray, boolean is false, add to new array
if it IS in the array, change boolean to true, if boolean is true do not add
change boolean back to false
return the newArray
*/

function unique(array) {
  var newArray = [];
  var isMatching = false;
  if (array.length < 1) {
    return newArray;
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        isMatching = true;
      }
    }
    if (isMatching === false) {
      newArray.push(array[i]);
    }
    isMatching = false;
  }
  return newArray;
}
