const fs = require('fs');
let cat = '';
let index = 2;
const total = process.argv.length;

read();

function read() {
  fs.readFile('./' + process.argv[index], 'utf8', (err, data) => {
    index++;
    if (err) throw err;
    if (index < total) {
      cat += (data + '\n');
      read();
    } else {
      cat += (data);
      console.log(cat);
    }
  });
}
