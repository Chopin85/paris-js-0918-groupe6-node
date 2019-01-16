const express = require('express');

const traineeRoute = express.Router();
const multer = require('multer');
const models = require('../models');

// // SINGUP ////
traineeRoute.post('/', (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (firstname == null || lastname == null || email == null || password == null) {
    res.status(412).json({
      message: 'champs requis'
    }); // message automatique via le input html 'required'
    // 412 - Préconditions envoyées par la requête non vérifiées
  } else {
    // requête sequelize : select email from trainee where email == req.body.email
    models.Trainee.findOne({
      attributes: ['email'],
      where: {
        email
      }
    }).then(traineeFound => {
      if (!traineeFound) {
        const newTrainee = new models.Trainee({
          firstname,
          lastname,
          email,
          password,
          isActived: true
        });
        newTrainee.save().then(result => {
          res.status(200).json({
            id: result.dataValues.id
          });
        });
      } else {
        res.status(400).json({
          message: 'user already exist'
        });
      }
    });
  }
});
traineeRoute.get('/:id/application', (req, res) => {
  models.Applications.findAll({
    where: {
      TraineeId: req.params.id
    },
    include: [
      {
        model: models.Missions,
        include: [
          {
            model: models.Company
          }
        ]
      }
    ]
  }).then(applicationFound => {
    if (applicationFound) {
      res.status(200).send(applicationFound);
    } else {
      res.status(404).json({
        message: 'no application '
      });
    }
  });
});

// post('/login')
// 1- le mail est-il dans la base de données?
// 2- le mot de passe correspond t-il?
traineeRoute.post('/login', (req, res) => {
  const { email, password } = req.body;
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
        } else if (traineeFound && traineeFound.password === password) {
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
// Route for GET profile Trainee
traineeRoute.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  models.Trainee.findOne({
    where: { id }
  })
    // select * from trainee where email = req.body.email
    .then(traineeFound => {
      if (traineeFound) {
        // console.log(traineeFound);
        res.status(200).json(traineeFound);
      } else {
        // console.log(traineeFound);
        res.status(401).json({ message: 'user not found' });
      }
    });
});

// Route for UPDATE profile Trainee
traineeRoute.put('/profile', (req, res) => {
  const {
    id,
    lastname,
    firstname,
    phone,
    address,
    town,
    postalCode,
    school,
    titre,
    description,
    dateStart,
    dateEnd
  } = req.body;
  models.Trainee.findOne({
    where: { id }
  })
    // select * from trainee where email = req.body.email
    .then(traineeFound => {
      if (traineeFound) {
        // console.log(traineeFound);
        traineeFound.update(
          {
            lastname,
            firstname,
            phone,
            address,
            town,
            postalCode,
            school,
            titre,
            description,
            dateStart: new Date(dateStart),
            dateEnd: new Date(dateEnd)
          },
          { id: [req.body.id] }
        );
        res.status(200).json(traineeFound);
      } else {
        // console.log(traineeFound);
        res.status(401).json({ message: 'user not found' });
      }
    });
});
// Route for UPLOAD photo profile

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/photoProfile');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 3 },
  fileFilter: (req, file, cb) => {
    console.log(file.mimetype);
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') cb(null, true);
    else cb(new Error('Mauvais format'));
  }
});

traineeRoute.post('/uploadphoto/:id', upload.single('avatar'), (req, res, next) => {
  console.log(req.params.id);
  console.log(req.file);
  const { id } = req.params;
  models.Trainee.findOne({
    where: { id }
  }).then(traineeFound => {
    if (traineeFound) {
      console.log(traineeFound);
      traineeFound.update({ pictures: req.file.path }, { id });
      res.status(200);
    } else {
      console.log(traineeFound);
      res.status(401).json({ message: 'user not found' });
    }
  });
  // console.log(req.body);
  res.end();
});

module.exports = traineeRoute;
