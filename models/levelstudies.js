'use strict';
module.exports = (sequelize, DataTypes) => {
  const levelStudies = sequelize.define('levelStudies', {
    label: DataTypes.STRING,
    level: DataTypes.STRING
  }, {});
  levelStudies.associate = function(models) {
    // associations can be defined here
    levelStudies.hasMany(models.trainee);
    levelStudies.hasMany(models.missions);
  };
  return levelStudies;
};