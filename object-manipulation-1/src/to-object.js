/* exported toObject */
/*
function takes an array of a string value and another value
first index of array is key
second index of array is value
create an empty object to add the key value pair into
assign the second array index (value) to the object property
  - use bracket notation for the object property
calling an object and assigning a value to it will create a new keyvalue pair if
  it is not created already
*/

function toObject(keyValuePair) {
  var newPair = {};
  newPair[keyValuePair[0]] = keyValuePair[1];
  return newPair;
}
