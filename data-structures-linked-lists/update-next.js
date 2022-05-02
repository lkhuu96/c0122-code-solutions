/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return;
  }
  const body = list.next.next;
  list.next.data = value;
  list.next.next = body;
}
