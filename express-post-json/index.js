const express = require('express');
const app = express();

let nextId = 1;
let grades = {};
const gradesArray = [];

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades = req.body;
  grades.id = nextId;
  gradesArray.push(grades);
  nextId++;
  res.json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
