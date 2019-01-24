const express = require('express');
const configRootAPI = require('./config/config.root');

const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const {
  missionRouter,
  traineeRoute,
  companyRoute,
  applicationRoute,
  paraData,
  adminRoute
} = require('./routers');
const models = require('./models');

const app = express();
const port = process.env.PORT || configRootAPI.port;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(`${configRootAPI.rootAPI}/mission`, missionRouter);
app.use(`${configRootAPI.rootAPI}/trainee`, traineeRoute);
app.use(`${configRootAPI.rootAPI}/company`, companyRoute);
app.use(`${configRootAPI.rootAPI}/paradata`, paraData);
app.use(`${configRootAPI.rootAPI}/application`, applicationRoute);
app.use(`${configRootAPI.rootAPI}/general`, paraData);
app.use(`${configRootAPI.rootAPI}/salutadmin`, adminRoute);

app.use(`${configRootAPI.rootAPI}/public`, express.static('public'));

/* Server Listening */
models.sequelize.sync().then(() => {
  app.listen(port);
  console.log(`>>Magic happens on port ${port}`);
});
models.exports = app;
