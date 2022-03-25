const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const namesArr = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

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
