const express = require('express');

const traineeRoute = express.Router();
const models = require('../models');

// post('/')
traineeRoute.post('/', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (firstname == null || lastname == null || email == null || password == null) {
    res.status(412).json({ message: 'champs requis' }); // message automatique via le input html 'required'
    // 412 - Préconditions envoyées par la requête non vérifiées
  } else {
    // requête sequelize : select email from trainee where email == req.body.email
    models.Trainee.findOne({
      attributes: ['email'],
      where: { email }
    }).then(traineeFound => {
      if (!traineeFound) {
        const newTrainee = new models.Trainee({
          firstname,
          lastname,
          email,
          password,
          isActived: true
        });
        newTrainee.save();
        res.status(200).json({ message: 'user created' });
      } else {
        res.status(400).json({ message: 'user already exist' });
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
    res.json({ message: 'champs requis' }); // message automatique via le input html 'required'
  } else {
    models.Trainee.findOne({
      where: { email }
    })
      // select * from trainee where email = req.body.email
      .then(traineeFound => {
        // traineeFound --> objet qui contient les infos demandées
        if (!traineeFound) {
          // si l'objet ne contient rien
          res.status(401).json({ message: 'user not found' });
        } else if (traineeFound && traineeFound.password === password) {
          // condition incomplète, ajouter les tokens dès que possible et crypter le mdp
          res.status(200).json({ message: 'user connected' });
        } else {
          res.status(404).json({ message: 'false password' });
        }
      });
  }
});

traineeRoute.post('/profile', (req, res) => {
  const { id } = req.body;
  models.Trainee.findOne({
    where: { id }
  })
    // select * from trainee where email = req.body.email
    .then(traineeFound => {
      if (traineeFound) {
        console.log(traineeFound);
        res.status(200).json(traineeFound);
      } else {
        console.log(traineeFound);
        res.status(401).json({ message: 'user not found' });
      }
    });
});

traineeRoute.put('/profile', (req, res) => {
  const { id, lastmane, firstname, phone, address, town, postalCode } = req.body;
  models.Trainee.findOne({
    where: { id }
  })
    // select * from trainee where email = req.body.email
    .then(traineeFound => {
      if (traineeFound) {
        console.log(traineeFound);
        traineeFound.update(
          { lastmane, firstname, phone, address, town, postalCode },
          { id: [req.body.id] }
        );
        res.status(200).json(traineeFound);
      } else {
        console.log(traineeFound);
        res.status(401).json({ message: 'user not found' });
      }
    });
});

module.exports = traineeRoute;
