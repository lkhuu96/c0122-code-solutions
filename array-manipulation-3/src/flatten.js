/* exported flatten */
/*
unpack any passed arrays by 1 level
create empty array container to hold new array values
loop through original array
if any index value is an array
pass that array into another loop
loop through the array within the array elements and add to array container
else add the current array element to the new array container.
return the new array.
*/

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
