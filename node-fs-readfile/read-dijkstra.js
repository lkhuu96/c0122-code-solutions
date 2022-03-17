const fs = require('fs');
const path = __dirname;
fs.readFile(path + '/dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
