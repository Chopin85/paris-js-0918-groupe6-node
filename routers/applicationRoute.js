const express = require('express');

const Router = express.Router();

const models = require('../models');

// Router.post('/', (req, res) => {

// });
// Router.get('/', (req, res) => {});

Router.post('/', (req, res) => {
  // get id_user and id_mission
  const { MissionId, TraineeId } = req.body;

  models.Applications.findOne({
    attributes: ['MissionId', 'TraineeId'],
    where: { TraineeId, MissionId }
  })
    .then(applicationFound => {
      if (!applicationFound) {
        const applicationForm = new models.Applications({
          statusAppli: true,
          MissionId: 1,
          TraineeId: 1
        });
        applicationForm.save();
        res.status(200).json({ messga: 'application created' });
      } else {
        res.status(404).json({ error: 'user already candidate' });
      }
    })
    .cath(res.status(500).json({ error: 'unable to verify user' }));
});
