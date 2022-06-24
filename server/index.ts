const express = require('express');
const path = require('path');
const router = require('./routes.ts');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(router);

const port = 3145;
app.listen(port, () => {
  console.log('App is listening on port 3145');
});