const express = require('express');

const Router = express.Router();

const models = require('../models');

Router.put('/', (req, res) => {
  const { missionId, traineeId } = req.body;
  models.Applications.findOne({
    where: { TraineeId: traineeId, MissionId: missionId, statusAppli: true }
  }).then(applicationFound => {
    if (applicationFound) {
      applicationFound.update({
        statusAppli: false
      });
      // applicationFound.save();
      res.status(201).json({ messga: 'application deleted' });
    } else {
      res.status(404).json({ error: 'application already deleted ' });
    }
  });
});
Router.get('/', (req, res) => {
  // const { traineeId } = req.body;
  const traineeId = 1;

  models.Applications.findAll({
    where: { TraineeId: traineeId }
  }).then(applicationFound => {
    if (applicationFound) {
      res.status(200).json(applicationFound);
    } else {
      res.status(404).json({ message: 'no application ' });
    }
  });
});

Router.post('/', (req, res) => {
  // get id_user and id_mission
  const { missionId, traineeId } = req.body;
  models.Applications.findOne({
    where: { TraineeId: traineeId, MissionId: missionId }
  }).then(applicationFound => {
    if (!applicationFound) {
      const applicationForm = new models.Applications({
        statusAppli: true,
        MissionId: missionId,
        TraineeId: traineeId
      });
      applicationForm.save();
      res.status(200).json({ messga: 'application created' });
    } else {
      res.status(404).json({ error: 'user already candidate' });
    }
  });
});

module.exports = Router;
