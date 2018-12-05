const express = require('express');

const Router = express.Router();
const models = require('../models');

// const regex = /^\s*$/gm;
Router.post('/', (req, res) => {
  // if not required but not write null (add trim for checking lenght) -- IMPORTANT
  const { companyName, lastnameContact, firstnameContact, email, phone, password } = req.body;
  if (lastnameContact == null || firstnameContact == null || email == null || password == null) {
    res.json({
      openDialog: false,
      title: 'missing parameters',
      content: 'Veuillez remplir tous les champs',
      button: 'ok'
    });
    // use this res.status(400).json({message:missing parametres});
  } else {
    models.company
      .findOne({
        attributes: ['email'],
        where: { email }
      })
      .then(companyFound => {
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
          console.log(req.body);
          newcompany.save();
          res.json({
            openDialog: true,
            title: 'user created',
            content: 'Félicitations, votre compte a été créé',
            button: 'suivant'
          });
          // findOne after save (last id created)
          // return id to the frontend
          // use this res.status(200).json({message:user created});
        } else {
          res.json({
            openDialog: true,
            title: 'user already exists',
            content: 'Cette adresse mail est déjà enregistrée',
            button: 'se connecter'
          });
          // use this res.status(401).json({message:user already exists});
        }
      });
  }
});

Router.route('/login').post((req, res) => {
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
            // return code 200 and return id user
          } else if (companyFound.email === email && companyFound.password !== password) {
            res.json({
              openDialog: true,
              title: 'password wrong',
              content: 'password wrong',
              button: 'suivant'
            });
            // return 403
          }
        } else {
          res.json({
            openDialog: true,
            title: 'user does not exist ',
            content: 'user does not exist',
            button: 'suivant'
          });
          // return 404
        }
      });
  }
});

module.exports = Router;
