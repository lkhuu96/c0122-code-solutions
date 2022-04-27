/* exported getTail */

function getTail(list) {
  let newList = list;
  while (newList.next !== null) {
    newList = newList.next;
  }
  return newList.data;
}
