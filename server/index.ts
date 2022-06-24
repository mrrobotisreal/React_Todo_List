const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist', 'index.html')));

app.listen(process.env.PORT, () => {
  console.log('App is listening on port 3145');
});