const express = require('express');
const models = require('../models');

const paraData = express.Router();

paraData.route('/').get((req, res) => {
  models.findAll().then(al => res.send(al));
});

module.exports = paraData;
