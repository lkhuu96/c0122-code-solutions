/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const body = list.next.next;
  list.next = body;
}
