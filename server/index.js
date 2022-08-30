const express = require('express');
const bodyParser = require('body-parser');

const port = 8888;
const app = express();
const router = require('./services/router');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app;