const express = require('express');
const models = require('../models');

const paraData = express.Router();

paraData.route('/').get((req, res) => {
  models.levelstudies.findAll().then(al => res.send(al));
});

module.exports = paraData;
