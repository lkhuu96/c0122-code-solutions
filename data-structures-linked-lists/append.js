/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const head = list.data;
  const body = list.next;
  let listTracker = new LinkedList(head);
  listTracker.next = body;
  while (listTracker.next !== null) {
    listTracker = listTracker.next;
  }
  listTracker.next = new LinkedList(value);
  return list;
}
