const express = require('express');
const traineeRoute = express.Router();
const models = require('../models');

// post('/')
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
// post('/login')
// 1- le mail est-il dans la base de données?
// 2- le mot de passe correspond t-il?
traineeRoute.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    res.send('champs requis'); // message automatique via le input html 'required'
  } else {
    models.trainee
      .findOne({
        where: { email }
      })
      // select * from trainee where email = req.body.email
      .then(traineeFound => {
        // traineeFound --> objet qui contient les infos demandées
        if (!traineeFound) {
          // si l'objet ne contien rien
          res.status(405).json({ message: 'user not found' });
        } else if (traineeFound && traineeFound.password === password) {
          res.status(202).json({ message: 'user connected' });
        } else {
          res.status(402).json({ message: 'false password' });
        }
      });
  }
});

module.exports = traineeRoute;
