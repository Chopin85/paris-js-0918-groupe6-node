const express = require('express');
const models = require('../models');

const missionRouter = express.Router();

missionRouter
  .route('/')
  .post((req, res) => {
    //const { titleMission, dateStart, dateEnd, town, intro, description, pictures } = req.body;
    const newForm = new models.Missions({
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
    models.Missions.findAll().then(mf =>
      mf ? res.json(mf) : res.status(404).json({ error: 'Pas de Mission Men' })
    );
  });

missionRouter.route('/:titlemission');
// .get((req, res) => {
//   console.log(req.query);
//   models.Missions.findOne({
//     titleMission: req.query.titleMission
//     // town: req.q
//     // where: { titleMission: req.params },
//     // attributes: ['titleMission']
//   }).then(mf => res.send(mf));
// });

// .get((req, res) => {
//   let query;

//   if (req.params.titleMission) {
//     console.log(req.params);
//     query = models.Missions.findAll({
//       include: [{ titleMission: req.params.titleMission }]
//     });
//   } else {
//     query = models.Missions.findAll();
//   }
//   return query.then(mf => res.json(mf));
// });

// .get((req, res) => {
//   // let query;
//   if (req.params.titleMission) {
//     connection.query('SELECT * FROM Missions Where titleMission = req.params.titleMission');
//   }
// });

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
          titleMission: titleMission,
          dateStart: dateStart,
          dateEnd: dateEnd,
          town: town,
          intro: intro,
          description: description,
          pictures: pictures
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
