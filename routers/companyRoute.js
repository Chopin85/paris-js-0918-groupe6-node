const express = require('express');

const companyRoute = express.Router();
const models = require('../models');
const regex = /\s/gm;
// const regex = /^\s*$/gm;
companyRoute.route('/').post((req, res) => {
  const { companyName, lastnameContact, firstnameContact, email, phone, password } = req.body;
  if (lastnameContact == null || firstnameContact == null || email == null || password == null) {
    res.json({
      openDialog: false,
      title: 'missing parameters',
      content: 'Veuillez remplir tous les champs',
      button: 'ok'
    });
  } else {
    models.company
      .findOne({
        attributes: ['email'],
        where: { email }
      })
      .then(companyFound => {
        if (!companyFound) {
          const newcompany = new models.company({
            companyName,
            lastnameContact,
            firstnameContact,
            email,
            phone,
            password,
            isActived: true
          });
          console.log(req.body);
          newcompany.save();
          res.json({
            openDialog: true,
            title: 'user created',
            content: 'Félicitations, votre compte a été créé',
            button: 'suivant'
          });
        } else {
          res.json({
            openDialog: true,
            title: 'user already exists',
            content: 'Cette adresse mail est déjà enregistrée',
            button: 'se connecter'
          });
        }
      });
  }
});

companyRoute.route('/login').post((req, res) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    res.json({
      openDialog: false,
      title: 'missing parameters',
      content: 'Veuillez remplir tous les champs',
      button: 'ok'
    });
  } else {
    models.company
      .findOne({
        attributes: ['email', 'password', 'firstnameContact'],
        where: { email }
      })
      .then(companyFound => {
        console.log(companyFound);
        // res.send(200);
        if (companyFound != null) {
          if (companyFound.email === email && companyFound.password === password) {
            res.json({
              openDialog: true,
              title: 'user connected',
              content: `Bonjour , ${companyFound.firstnameContact}`,
              button: 'suivant'
            });
          } else if (companyFound.email === email && companyFound.password !== password) {
            res.json({
              openDialog: true,
              title: 'password wrong',
              content: 'password wrong',
              button: 'suivant'
            });
          }
        } else {
          res.json({
            openDialog: true,
            title: 'user does not exist ',
            content: 'user does not exist',
            button: 'suivant'
          });
        }
      });
  }
});

module.exports = companyRoute;
