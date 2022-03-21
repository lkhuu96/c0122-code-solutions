const express = require('express');
const dataJSON = require('./data.json');
const app = express();

app.get('/api/notes', (req, res) => {
  const notes = dataJSON.notes;
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).send(notesArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
