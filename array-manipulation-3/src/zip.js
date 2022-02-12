/* exported zip */
/*
need to return a combination of two arrays
  combination of arrays must be an array of "pairs"
  each pair is the first array at x  and then second array at x index
only add if there are pairs (ie stopping value is the shorter length of the two arrays)
need to create an empty array hold the arrays (newArray)
need another empty array to hold the pairs (arrayPair)
need to create a stopping variable (check which array is shorter and set the stopping variable
    to that array length)
add first array index to arrayPair, then add second array index to arrayPair
push arrayPair to newArray, then empty arrayPair
continue until stopping value is reached
return the newArray
 */

// function zip(first, second) {
//   var newArray = [];
//   var arrayPair = [];
//   var stopValue = first.length;
//   if (second.length < stopValue) {
//     stopValue = second.length;
//   }
//   for (var i = 0; i < stopValue; i++) {

//   }
// }
