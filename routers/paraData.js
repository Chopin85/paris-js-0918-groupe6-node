const express = require('express');
const models = require('../models');

const paraData = express.Router();

paraData.route('/levelstudies').get((req, res) => {
  models.LevelStudies.findAll().then(al => res.send(al));
});

module.exports = paraData;
