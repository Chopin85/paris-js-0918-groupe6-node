const express = require('express');

const app = express();
const models = require('./models');

app.get('/', (req, res) => {
  res.send('Hello World');
});

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001);
});
models.exports = app;
