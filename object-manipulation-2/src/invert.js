/* exported invert */
/*
return an object that swaps the keys and values (original keys become values and
  original values become keys)
create an empty object to store the new key value pairs (newObj)
need to check if any data is in the given object
loop through given object
add key value pairs to new object
return the new object
*/

function invert(source) {
  var newObj = {};
  if (source) {
    for (var keys in source) {
      newObj[source[keys]] = keys;
    }
  }
  return newObj;
}
