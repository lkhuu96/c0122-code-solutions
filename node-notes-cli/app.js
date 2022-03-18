const fs = require('fs');
const jsonObject = require('./data.json');
const command = process.argv[2].toLowerCase();
const firstArg = process.argv[3];
const secondArg = process.argv[4];
const notes = jsonObject.notes;
const nextId = jsonObject.nextId;

if (command === 'read') {
  for (const key in notes) {
    console.log(`${key}: ${notes[key]}`);
  }
} else if (command === 'create') {
  notes[nextId] = firstArg;
  jsonObject.nextId++;
} else if (command === 'delete') {
  if (notes[firstArg]) {
    delete notes[firstArg];
  } else {
    console.log(`No object with id '${firstArg}' to delete`);
  }
} else if (command === 'update') {
  if (notes[firstArg]) {
    notes[firstArg] = secondArg;
  } else {
    console.log(`No object with id '${firstArg}' to update`);
  }
} else {
  console.log('invalid command');
}
fs.writeFile('data.json', JSON.stringify(jsonObject, null, 2), err => {
  if (err) throw err;
});
