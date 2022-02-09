/* exported omit */
/*
return an object with key value pair(s) not in a given array of keys
create empty object to hold new key value pair(s)
create counter to keep track of if key is in array
loop properties of the object through the given keys array
use for in loop to loop through the keys in object
use for loop to loop object keys through the keys array
if object key matches element in keys array, add to counter
if counter is greater than 0, reset counter and loop next object key
if counter is 0, add key-value pair to empty object
return object
*/

function omit(source, keys) {
  var newObj = {};
  var count = 0;
  for (var key in source) {
    for (var x = 0; x < keys.length; x++) {
      if (keys[x] === key) {
        count++;
      }
    }
    if (count > 0) {
      count = 0;
    } else {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
