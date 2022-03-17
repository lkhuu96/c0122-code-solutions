const fs = require('fs');
fs.readFile('/mnt/c/Users/trace/repos/c0122-code-solutions/node-fs-readfile/dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
