/* exported removeTail */

function removeTail(list) {
  let newList = list;
  if (list.next === null) {
    return;
  }
  while (newList.next.next !== null) {
    newList = newList.next;
  }
  newList.next = null;
  return list;
}
