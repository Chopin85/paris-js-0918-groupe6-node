'use strict';
module.exports = (sequelize, DataTypes) => {
  const schools = sequelize.define('schools', {
    name: DataTypes.STRING,
    isActived: DataTypes.STRING
  }, {});
  schools.associate = function(models) {
    // associations can be defined here
    schools.hasMany(models.trainee);
    schools.belongsToMany(models.missions, {through: 'schools&missions'});
  };
  return schools;
};