const fs = require('fs');
const command = process.argv[2];

if (command === 'read') {
  fs.readFile('data.json', 'utf8', (err, json) => {
    if (err) throw err;
    var notes = JSON.parse(json);
    for (const key in notes.notes) {
      console.log(`${key}: ${notes.notes[key]}`);
    }
  });
}
