const express = require('express');
const Sequelize = require('sequelize');

const models = require('../models');

const missionRouter = express.Router();

missionRouter
  .route('/')
  .post((req, res) => {
    // const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
    const newForm = new models.Missions({
      titleMission: req.body.titleMission,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      town: req.body.town,
      intro: req.body.intro,
      description: req.body.description,
      pictures: 'test',
      CompanyId: 1
    });
    newForm.save();
    res.end('fin post');
  })

  .get((req, res) => {
    models.Missions.findAll({
      where: {
        titleMission: { $like: '%' + req.query.search + '%' },
        town: { $like: '%' + req.query.town + '%' }
      }
    }).then(mf => (mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission Men' })));
  });

missionRouter
  .route('/:id(\\d+)')

  /* Route Missions */

  // mf = MissionFound

  .get((req, res) => {
    models.Missions.find({
      where: { id: req.params.id }
    }).then(mf => (mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission Men' })));
  })

  .put((req, res) => {
    const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
    models.Missions.find({
      where: {
        id: req.params.id
      }
    }).then(mf => {
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
    models.Missions.destroy({
      where: {
        id: req.params.id
      }
    }).then(mf => (mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission' })));
  });

// app.use('/mission', router);

module.exports = missionRouter;
