const fs = require('fs');
const fileToRead = process.argv[2];
const path = __dirname;
fs.readFile(path + '/' + fileToRead, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
