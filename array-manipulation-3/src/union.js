/* exported union */
/*
return array that represents both arrays 1 and 2 without duplicates
create empty array container
need to check if first array has any duplicates
loop through first array and compare it with the empty array container elements
if an element is not in the array container, add it to array container
if array element is in array container, continue to next iteration of array element
loop next array element through the container
repeat until all elements of array have been checked with container
use same code to loop second array through the array container
only add second array elements if they are not in array container
*/

function union(first, second) {
  var newArray = [];
  newArray = checkMatching(first, newArray);
  newArray = checkMatching(second, newArray);
  return newArray;
}

function checkMatching(array, arrayContainer) {
  var isMatching = false;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < arrayContainer.length; j++) {
      if (array[i] === arrayContainer[j]) {
        isMatching = true;
      }
    }
    if (isMatching === false) {
      arrayContainer.push(array[i]);
    }
    isMatching = false;
  }
  return arrayContainer;
}
