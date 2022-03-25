const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initial = 0;
const sum = numbers.reduce((previous, current) => current + previous);
const product = numbers.reduce((previous, current) => current * previous);
const balance = account.reduce((previous, current) => {
  if (current.type === 'deposit') {
    return previous + current.amount;
  } else {
    return previous - current.amount;
  }
}, initial);
const composite = traits.reduce((previous, current) => {
  return Object.assign(previous, current);
});
