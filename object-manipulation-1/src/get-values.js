/* exported getValues */
/*
need to return the values in an object
declare an empty array literal to assign object values to
use a for-in loop to access object values
add each object value to the new empty array
return the new array
*/

function getValues(object) {
  var objValues = [];
  for (var x in object) {
    objValues.push(object[x]);
  }
  return objValues;
}
