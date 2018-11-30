const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');
const { traineeRoute } = require('./routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/trainee', traineeRoute);

models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001);
});
models.exports = app;
