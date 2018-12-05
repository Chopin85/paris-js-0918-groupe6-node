'use strict';
module.exports = (sequelize, DataTypes) => {
  const LevelStudies = sequelize.define(
    'LevelStudies',
    {
      label: DataTypes.STRING,
      level: DataTypes.STRING
    },
    {}
  );
  LevelStudies.associate = function(models) {
    // associations can be defined here
    LevelStudies.hasMany(models.Trainee);
    LevelStudies.hasMany(models.Missions);
  };
  return LevelStudies;
};
