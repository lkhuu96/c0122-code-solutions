/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const lastValue = stack.pop();
  const secondFromTop = stack.peek();
  stack.push(lastValue);
  return secondFromTop;
}
