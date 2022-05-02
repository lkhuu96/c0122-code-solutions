/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newList = new LinkedList(value);
  newList.next = new LinkedList(list.data);
  newList.next.next = list.next;
  return newList;
}
