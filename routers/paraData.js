const express = require('express');
const models = require('../models');

const paraData = express.Router();

<<<<<<< HEAD
paraData.route('/').get((req, res) => {
  models.findAll().then(al => res.send(al));
=======
paraData.route('/levelstudies').get((req, res) => {
  models.LevelStudies.findAll().then(al => res.send(al));
>>>>>>> e4effc111e524db1f0925d67fd1692a8ddaf37ca
});

module.exports = paraData;
