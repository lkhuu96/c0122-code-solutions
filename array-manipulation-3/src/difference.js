/* exported difference */
/*
return only non-matching values in array form
create empty array variable to store unique array elements (newArray)
create boolean to keep track if first array element is in second array element
loop first array through second array
if word matches, boolean becomes true
if boolean is true, add first array element at current index to empty array container
change boolean to false and then contineu to next iteration
once all first array elements are added, repeat same steps but with second array
  looping through first array.
return newArray

*/

function difference(first, second) {
  var firstContainer = loopArrays(first, second);
  var secondContainer = loopArrays(second, first);
  return firstContainer.concat(secondContainer);
}

function loopArrays(array1, array2) {
  var newArray = [];
  var matchingWords = false;
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        matchingWords = true;
      }
    }
    if (matchingWords === false) {
      newArray.push(array1[i]);
    }
    matchingWords = false;
  }
  return newArray;
}
