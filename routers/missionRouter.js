const express = require('express');

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
      LevelStudyId: req.body.LevelStudyId,
      pictures: 'test',
      CompanyId: req.body.CompanyId
    });
    console.log(newForm, req.body.levelStudyId);
    newForm.save().then(data => res.status(200).send(data.dataValues));

    // res.end('fin post');
  })

  .get((req, res) => {
    models.Missions.findAll({
      where: {
        titleMission: {
          $like: `%${req.query.search}%`
        },
        town: {
          $like: `%${req.query.town}%`
        }
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

missionRouter
  .route('/:id(\\d+)')

  /* Route Missions */

  // mf = MissionFound

  .get((req, res) => {
    models.Missions.find({
      where: {
        id: req.params.id
      }
    }).then(mf =>
      mf
        ? res.json(mf)
        : res.status(404).json({
            error: 'Pas de Mission Men'
          })
    );
  }) // Modification des Missions
  .put((req, res) => {
    const {
      titleMission,
      dateStart,
      dateEnd,
      town,
      intro,
      description,
      pictures,
      LevelStudyId
    } = req.body;
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
          pictures,
          LevelStudyId
        }).then(data => {
          res.send(data);
        });
      } else {
        res.status(404).json({
          error: 'pas de Mission'
        });
      }
    });
  })
  // valider ma teem

  .delete((req, res) => {
    models.Missions.destroy({
      where: {
        id: req.params.id
      }
    }).then(mf =>
      mf
        ? res.json(mf)
        : res.status(404).json({
            error: 'Pas de Mission'
          })
    );
  });

missionRouter.route('/validate').put((req, res) => {
  const { missionId, companyId } = req.body;
  models.Applications.count({
    where: { Missionid: missionId, selection: true }
  }).then(result => {
    console.log(result);

    if (result) {
      if (result > 2 && result < 6) {
        models.Missions.findOne({
          where: { CompanyId: companyId, id: missionId }
        }).then(missionFound => {
          if (missionFound) {
            missionFound.update({ isFull: true });
            missionFound.save().then(resultData => res.status(200).json(resultData.dataValues));
          } else {
            res.status(404).json({ error: 'cant find the mission in DB' });
          }
        });
      } else {
        res.status(422).json({ error: 'number of student  beetween 3-5' });
      }
    } else {
      res.status(404).json({ error: 'Missed mission id or company id ' });
    }
  });
});
// app.use('/mission', router);

module.exports = missionRouter;
