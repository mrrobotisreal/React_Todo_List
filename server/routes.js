const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  console.log('req -> ', req.body);
  res.send('Gotcha!');
});

module.exports = router;