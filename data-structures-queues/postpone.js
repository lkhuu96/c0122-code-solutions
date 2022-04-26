/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  queue.enqueue(first);
}
