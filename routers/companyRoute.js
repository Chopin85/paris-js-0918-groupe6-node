const express = require('express');
const sequelize = require('sequelize');

const Router = express.Router();
const models = require('../models');

const { Op } = sequelize;

// const regex = /^\s*$/gm;
Router.post('/', (req, res) => {
  // if not required but not write null (add trim for checking lenght) -- IMPORTANT
  const { companyName, lastnameContact, firstnameContact, email, phone, password } = req.body;
  if (lastnameContact == null || firstnameContact == null || email == null || password == null) {
    res.status(400).json({
      message: 'missing parametres'
    });
  } else {
    models.Company.findOne({
      attributes: ['email'],
      where: {
        email
      }
    }).then(companyFound => {
      if (!companyFound) {
        const newcompany = new models.Company({
          companyName,
          lastnameContact,
          firstnameContact,
          email,
          phone,
          password,
          isActived: true
        });
        newcompany.save().then(company => {
          res.status(200).json({
            id: company.dataValues.id
          });
        });
      } else {
        res.status(401).json({
          message: 'user already exists'
        });
      }
    });
  }
});
Router.get('/:id', (req, res) => {
  models.Company.find({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: models.Missions,
        required: false,
        where: {
          isActived: {
            [Op.or]: [true, null]
          }
        },
        include: [
          {
            model: models.LevelStudies
          }
        ]
      }
    ]
  }).then(f => {
    if (f) {
      res.status(200).send(f);
    } else {
      res.status(400).json({ message: "pas d'existance" });
    }
  });
});

Router.get('/:id/application', (req, res) => {
  models.Applications.findAll({
    include: [
      {
        model: models.Missions,
        where: {
          CompanyId: req.params.id,
          isActived: {
            [Op.or]: [true, null]
          }
        },
        include: [
          {
            model: models.Trainee
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

Router.route('/login').post((req, res) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    res.status(400).json({
      message: 'missing parameters'
    });
  } else {
    models.Company.findOne({
      attributes: ['email', 'password', 'id'],
      where: {
        email
      }
    }).then(companyFound => {
      console.log(companyFound);
      // res.send(200);
      if (companyFound != null) {
        if (companyFound.email === email && companyFound.password === password) {
          res.status(200).json({
            id: companyFound.id
          });
        } else if (companyFound.email === email && companyFound.password !== password) {
          res.status(401).json({
            message: 'password wrong'
          });
        }
      } else {
        res.status(404).json({
          message: 'user does not exist'
        });
      }
    });
  }
});

module.exports = Router;
