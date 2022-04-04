const express = require('express');
const path = require('path');
const app = express();

const directoryName = path.join(__dirname, 'public');
const stat = express.static(directoryName);

app.use(stat);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
