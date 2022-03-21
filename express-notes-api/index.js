const express = require('express');
const dataJSON = require('./data.json');
const app = express();

const errors = {
  400: {
    error: 'id must be a positive integer'
  },
  404: {
    error: ''
  }
};

app.get('/api/notes', (req, res) => {
  const notes = dataJSON.notes;
  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }
  res.status(200).send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const notes = dataJSON.notes;
  const idNum = Number(req.params.id);
  if (!Number.isInteger(req.params.id)) {
    res.status(400).send(errors[400]);
  } else if (notes[idNum]) {
    res.status(200).send(notes[idNum]);
  } else {
    errors[404].error = `cannot find note with id ${idNum}`;
    res.status(404).send(errors[404]);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
