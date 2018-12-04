const express = require('express');
const traineeRoute = express.Router();
const models = require('../models');

traineeRoute.post('/', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (firstname == null || lastname == null || email == null || password == null) {
    res.json({
      openDialog: false,
      title: 'missing parameters',
      content: 'Veuillez remplir tous les champs',
      button: 'ok'
    });
  } else {
    models.trainee
      .findOne({
        attributes: ['email'],
        where: { email }
      })
      .then(traineeFound => {
        if (!traineeFound) {
          const newTrainee = new models.trainee({
            firstname,
            lastname,
            email,
            password,
            isActived: true
          });
          newTrainee.save();
          res.json({
            openDialog: true,
            title: 'user created',
            content: 'Félicitations, votre compte a été créé',
            button: 'suivant'
          });
        } else {
          res.json({
            openDialog: true,
            title: 'user already exists',
            content: 'Cette adresse mail est déjà enregistrée',
            button: 'se connecter'
          });
        }
      });
  }
});
module.exports = traineeRoute;
