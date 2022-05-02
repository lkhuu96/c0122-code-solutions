/* exported includes */

function includes(list, value) {
  let newList = list;
  while (newList !== null) {
    if (newList.data === value) {
      return true;
    }
    newList = newList.next;
  }
  return false;
}
