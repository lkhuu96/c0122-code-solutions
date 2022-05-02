/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const newList = list;
  const head = list.data;
  const second = list.next.data;
  const body = list.next.next;
  newList.data = second;
  newList.next.data = head;
  newList.next.next = body;
  return newList;
}
