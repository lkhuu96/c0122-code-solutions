function filter(array, predicate) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const evenNumbersFunc = number => number % 2 === 0;
const overFiveFunc = number => number > 5;
const startWithEFunc = name => name.startsWith('E');
const haveDFunc = name => name.includes('d') || name.includes('D');
