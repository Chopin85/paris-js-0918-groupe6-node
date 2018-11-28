const express = require("express");
const app = express();
<<<<<<< HEAD
const models = require('./models');

=======
const models = require("./models");
>>>>>>> 595e7215c38f9e3460d43f1f6f2985372a0cb4b9

app.get("/", function(req, res) {
    res.send("Hello World");
});

models.sequelize.sync().then(() => {
app.listen(process.env.PORT || 3001);
});

<<<<<<< HEAD
=======
models.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001);
})
>>>>>>> 595e7215c38f9e3460d43f1f6f2985372a0cb4b9
