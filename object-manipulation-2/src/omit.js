/* exported omit */
/*
return an object with key value pair(s) not in a given array of keys
create empty object to hold new key value pair(s)
loop array of keys through object keys
if object key matches array element, skip
if array element is not in object key, add to object
return object

*/

function omit(source, keys) {
  var newObj = {};
  // var isInArray = false;
  for (var y = 0; y < keys.length; y++) {
    if (!source[keys[y]]) {
      newObj[keys[y]] = source[keys[y]];
    }
  }
  return newObj;
}
