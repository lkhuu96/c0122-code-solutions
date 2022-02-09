/* exported defaults */
/*
function takes two objects and adds any key-value pair from the second object to the first
  object if it is not there
create new object and set equal to target
loop through keys in source
if target object has matching key, skip
if target does not have a matching key, or matching key is undefined, add source key-value
  pair to newObj.
  return newObj
*/

function defaults(target, source) {
  var newObj = target;
  for (var x in source) {
    if (target[x] === undefined) {
      newObj[x] = source[x];
    }
  }
  return newObj;
}
