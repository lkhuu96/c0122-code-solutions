/* exported equal */
/*
check if two arrays are exact copies of each other
value at each index need to be the same
create for loop to loop through each index
loop condition to stop at longest array length
first need to assign longest length by comparing each array length
if array 1 at x is the same as array 2 at index x for every index
return true
if any index value is not equal, return false
*/

function equal(first, second) {
  var longestLength = first.length;
  if (second.length > first.length) {
    longestLength = second.length;
  }
  for (var x = 0; x < longestLength; x++) {
    if (first[x] !== second[x]) {
      return false;
    }
  }
  return true;
}
