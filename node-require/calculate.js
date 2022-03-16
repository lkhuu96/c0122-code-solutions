const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const args = process.argv;
const x = parseInt(args[2]);
const op = args[3];
const y = parseInt(args[4]);

if (op === 'plus') {
  console.log('result:', add(x, y));
} else if (op === 'minus') {
  console.log('result:', subtract(x, y));
} else if (op === 'times') {
  console.log('result:', multiply(x, y));
} else if (op === 'over') {
  console.log('result:', divide(x, y));
}
