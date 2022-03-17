const fs = require('fs');
const command = process.argv[2];
const textInput = process.argv[3];

fs.readFile('data.json', 'utf8', (err, json) => {
  if (err) throw err;
  const jsonObject = JSON.parse(json);
  const notes = jsonObject.notes;
  const nextId = jsonObject.nextId;
  if (command === 'read') {
    for (const key in notes) {
      console.log(`${key}: ${notes[key]}`);
    }
  } else if (command === 'create') {
    notes[nextId] = textInput;
    jsonObject.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonObject, null, 2), err => {
      if (err) throw err;
    });
  }
});
