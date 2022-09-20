// run `node index.js` in the terminal

const bodyParse = require('body-parser');
const express = require('express');
const app = express();

app.listen(8686, () => {
  console.log('Servidor rodando');
});
