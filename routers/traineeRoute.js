const express = require('express');
const traineeRoute = express.Router();
const models = require('../models');

traineeRoute.route('/').post((req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (firstname == null || lastname == null || email == null || password == null) {
    return res.status(400).json({ error: 'missing parameters' });
  }

  models.trainee
    .findOne({
      attributes: ['email'],
      where: { email: email }
    })
    .then(traineeFound => {
      if (!traineeFound) {
        const newTrainee = new models.trainee({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          isActived: true
        });
        console.log(req.body);
        newTrainee.save();
        res.json({ error: 'user created' });
      } else {
        res.status(409).json({ error: 'user already exist' });
      }
    });
});
module.exports = traineeRoute;
