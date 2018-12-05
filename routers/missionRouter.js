const express = require('express');
const models = require('../models');

const missionRouter = express.Router();

<<<<<<< HEAD
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
=======
missionRouter
  .route('/')
  .post((req, res) => {
    //const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
    const newForm = new models.missions({
      titleMission: req.body.titleMission,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      town: req.body.town,
      intro: req.body.intro,
      description: req.body.description,
      pictures: req.body.pictures
    });
    newForm.save();
    res.end('fin post');
  })
  .get((req, res) => {
    models.missions.findAll().then(mf => res.send(mf));
>>>>>>> 76a5c799a4eacc52f6e08996655e253db72de25e
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
