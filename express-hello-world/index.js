const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is running at port 3000');
});
