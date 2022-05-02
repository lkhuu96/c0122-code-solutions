/* exported getLength */

function getLength(list) {
  let counter = 0;
  let newList = list;
  while (newList !== null) {
    counter++;
    newList = newList.next;
  }
  return counter;
}
