const express = require('express');

const Router = express.Router();
const models = require('../models');

// Modification de
Router.put('/', (req, res) => {
  const { missionId, traineeId } = req.body;

  models.Applications.findOne({
    where: {
      TraineeId: traineeId,
      MissionId: missionId,
      statusAppli: true
    }
  }).then(applicationFound => {
    if (applicationFound) {
      applicationFound.update({
        statusAppli: false
      });
      applicationFound.save();
      res.status(201).json({
        messga: 'application deleted'
      });
    } else {
      res.status(404).json({
        error: 'application already deleted '
      });
    }
  });
});
/**
 * return the informations of the trainees
 * that candidate to missions of one company
 */
Router.get('/:id/mytrainee', (req, res) => {
  models.Missions.findAll({
    where: { companyId: req.params.id }
  }).then(missionsFound => {
    if (missionsFound) {
      const data = [];
      let newPromise = null;
      missionsFound.map(element => {
        newPromise = models.Applications.findAll({
          where: { MissionId: element.dataValues.id },
          order: ['MissionId'],
          include: [
            {
              model: models.Trainee,
              attributes: ['firstname', 'pictures', 'address', 'town', 'postalCode'],
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
            data.push({
              mission_id: element.dataValues.id,
              titleMission: element.dataValues.titleMission,
              dataApplications: applicationFound
            });
          }
        });
      });
      Promise.all([newPromise]).then(() =>
        res.status(200).json({ company_id: req.params.id, data })
      );
    } else {
      res.status(404).json({ message: 'no application ' });
    }
  });
});
// Route Company afficher les liens entrre trainee et mission
Router.get('/company', (req, res) => {
  // const { traineeId } = req.body;
  const missionId = 1;

  models.Applications.findAll({
    where: {
      MissionId: missionId
    },
    include: [
      {
        model: models.Trainee
      }
    ]
  }).then(applicationFound => {
    if (applicationFound) {
      res.status(200).json(applicationFound);
    } else {
      res.status(404).json({
        message: 'no application '
      });
    }
  });
});

Router.post('/', (req, res) => {
  const { missionId, traineeId } = req.body;
  models.Applications.findOne({
    where: {
      TraineeId: traineeId,
      MissionId: missionId
    }
  }).then(applicationFound => {
    if (!applicationFound) {
      const applicationForm = new models.Applications({
        statusAppli: true,
        MissionId: missionId,
        TraineeId: traineeId
      });
      applicationForm.save();
      res.status(200).json({ Application: applicationForm.dataValues });
    } else {
      res.status(404).json({
        error: 'user already candidate'
      });
    }
  });
});

module.exports = Router;
