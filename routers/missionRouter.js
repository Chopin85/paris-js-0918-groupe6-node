const express = require('express');
const models = require('../models');

const missionRouter = express.Router();

missionRouter.route('/').post((req, res) => {
  const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
  const newForm = new models.missions({
    titleMission,
    dateStart,
    dateEnd,
    town,
    intro,
    description,
    pictures
  });
  newForm.save();
  res.end('fin post');
});

missionRouter
  .route('/:id(\\d+)')

  /* Route Missions */

  // mf = MissionFound

  .get((req, res) => {
    models.missions
      .find({
        where: { id: req.params.id }
      })
      .then(mf => (mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission Men' })));
  })

  .put((req, res) => {
    const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
    models.missions
      .find({
        where: {
          id: req.params.id
        }
      })
      .then(mf => {
        if (mf) {
          mf.updateAttributes({
            titleMission,
            dateStart,
            dateEnd,
            town,
            intro,
            description,
            pictures
          }).then(mf => {
            res.send(mf);
          });
        } else {
          res.status(404).json({ error: 'pas de Mission' });
        }
      });
  })

  .delete((req, res) => {
    models.missions
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(mf => (mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission' })));
  });

// app.use('/mission', router);

module.exports = missionRouter;
