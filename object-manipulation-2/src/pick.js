/* exported pick */
/*
return key value pairs
create an emtpy object to store key-value pairs
loop through object to check if keys from array are inside the object
need to check if object is undefined, if it is, do not add
if they are inside the object, then add to a new object
return new object
 */

function pick(source, keys) {
  var newObj = {};
  for (var key in source) {
    for (var x = 0; x < keys.length; x++) {
      if (source[key] !== undefined && key === keys[x]) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
