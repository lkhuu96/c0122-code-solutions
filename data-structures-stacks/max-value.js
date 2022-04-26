/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    if (stack.peek() > maxValue) {
      maxValue = stack.peek();
    }
    stack.pop();
  }
  return maxValue;
}
