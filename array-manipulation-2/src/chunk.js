/* exported chunk */
/*
return an array of multiple arrays with a given 'size'
need empty array for final array of arrays
need empty array for sub arrays
for loop to add elements of sub array
stop loop at the last array index (use array.length)
if subarray length reaches 'size', push subarray into main array
then clear sub array
then add current iteration into sub array and continue loop
once the last index is reached, stop loop and add sub array to the main array
return the main array (the array of arrays)
*/

function chunk(array, size) {
  var mainArray = [];
  var subArray = [];
  if (array.length > 0) {
    for (var x = 0; x < array.length; x++) {
      if (subArray.length < size) {
        subArray.push(array[x]);
      } else {
        mainArray.push(subArray);
        subArray = [];
        subArray.push(array[x]);
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
}
