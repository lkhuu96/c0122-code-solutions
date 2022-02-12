/* exported intersection */
/*
need to return any matching elements in arrays 1 and 2
add empty array container
loop first array element through second array
if elements match, add to empty array container
continue to next iteration
return array container
*/

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
