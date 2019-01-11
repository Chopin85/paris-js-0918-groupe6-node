const express = require('express');

const adminRoute = express.Router();
const models = require('../models');

// post('/login')
// 1- le mail est-il dans la base de données?
// 2- le mot de passe correspond t-il?
adminRoute.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('email pass', email, password);

  if (email == null || password == null) {
    res.json({
      message: 'champs requis'
    }); // message automatique via le input html 'required'
  } else {
    models.Trainee.findOne({
      where: {
        email
      }
    })
      // select * from trainee where email = req.body.email
      .then(traineeFound => {
        // traineeFound --> objet qui contient les infos demandées
        if (!traineeFound) {
          // si l'objet ne contient rien
          res.status(401).json({
            message: 'user not found'
          });
        } else if (
          traineeFound &&
          traineeFound.password === password &&
          traineeFound.email === 'gerard@gmail.com'
        ) {
          // condition incomplète, ajouter les tokens dès que possible et crypter le mdp
          res.status(200).json({
            id: traineeFound.id
          });
        } else {
          res.status(404).json({
            message: 'false password'
          });
        }
      });
  }
});

adminRoute.get('/missions', (req, res) => {
  models.Missions.findAll({
    where: {
      isFull: 1
    },
    include: [
      {
        model: models.Company
      }
    ]
  }).then(mf =>
    mf
      ? res.json(mf)
      : res.status(404).json({
          error: 'Pas de Mission pour votre recherche'
        })
  );
});
module.exports = adminRoute;
