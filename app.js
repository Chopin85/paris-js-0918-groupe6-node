const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const { missionRouter } = require('./routers');
const models = require('./models');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/mission', missionRouter);

// let router = express.Router();

app.get('/', (req, res) => {
  res.send('Hello World');
});

/* Server Listening */

models.sequelize.sync().then(() => {
  app.listen(port);
  console.log(`Magic happens on port ${port}`);
});
models.exports = app;
