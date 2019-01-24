const express = require('express');
const sequelize = require('sequelize');

const adminRoute = express.Router();
const models = require('../models');

const { Op } = sequelize;

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
          traineeFound.isAdmin === true
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
  // ********************* test required **********************************
  // models.Company.findAll({
  //   include: [
  //     {
  //       required: true,
  //       model: models.Missions
  //     }
  //   ]
  // }).then(f => {
  //   if (f) {
  //     res.status(200).send(f);
  //   } else {
  //     res.status(400).json({ message: "pas d'existance" });
  //   }
  // });
  // ***********************************************************************
  console.log('ADMIN');
  models.Missions.findAll({
    where: {
      isFull: 1,
      isActived: {
        [Op.or]: [true, null]
      }
    },
    include: [
      {
        model: models.Company,
        attributes: ['id', 'companyName', 'lastnameContact', 'firstnameContact', 'phone', 'email']
      },
      {
        model: models.LevelStudies
      }
    ]
  }).then(missionsFound => {
    if (missionsFound) {
      let data = [];
      const trainee = [];
      const promises = [];
      let newPromise = null;
      data = missionsFound;
      missionsFound.map(element => {
        newPromise = models.Applications.findAll({
          where: { MissionId: element.dataValues.id, selection: true },
          order: ['MissionId'],
          include: [
            {
              model: models.Trainee,
              include: [
                {
                  model: models.LevelStudies
                },
                {
                  model: models.Schools
                }
              ]
            }
          ]
        }).then(applicationFound => {
          if (applicationFound.length !== 0) {
            trainee.push({
              mission_id: element.dataValues.id,
              titleMission: element.dataValues.titleMission,
              dataApplications: applicationFound
            });
          }
        });
        promises.push(newPromise);
      });
      Promise.all(promises).then(() => res.status(200).json({ data, trainee }));
    } else {
      res.status(404).json({ error: 'no application ' });
    }
  });
});
// *************** test double include *****************
// console.log('ADMIN');
// models.Missions.findAll({
//   where: { isFull: 1 },
//   include: [
//     {
//       model: models.Applications,
//       include: [models.Trainee]
//     }
//   ]
// }).then(missionsFound => {
//   if (missionsFound) {
//     let data = [];
//     const trainee = [];
//     let newPromise = null;
//     data = missionsFound;
//     Promise.all([newPromise]).then(() => res.status(200).json({ data, trainee }));
//   } else {
//     res.status(404).json({ error: 'no application ' });
//   }
// });
module.exports = adminRoute;
