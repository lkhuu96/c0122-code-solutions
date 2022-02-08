/* exported defaults */
/*
function takes two objects and adds any key-value pair from the second object to the first
  object if it is not there
create new object and set equal to target
if key is in source, but not in target, add key value to new object
create counter to keep track of if source key is already in target
need to loop source keys through target object and see if keys match
first loop to loop through source keys
second loop to through the object keys and match the source keys
if keys match, add to counter
if counter is greater than 0 (meaning key match was found), reset counter and
  continue to next iteration
if counter is 0 (meaning no match), add source key-value pair to new object holding
  target object.
*/

function defaults(target, source) {
  var newObj = target;
  var count = 0;
  for (var x in source) {
    for (var y in target) {
      if (x === y) {
        count++;
      }
    }
    if (count > 0) {
      count = 0;
    } else {
      newObj[x] = source[x];
    }
  }
}
