'use strict';
module.exports = (sequelize, DataTypes) => {
  const missions = sequelize.define('missions', {
    titleMission: DataTypes.STRING,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    description: DataTypes.STRING(2500),
    isActived: DataTypes.BOOLEAN,
    town: DataTypes.STRING,
    isFull: DataTypes.BOOLEAN,
    updateAt: DataTypes.DATE,
    intro: DataTypes.STRING,
    pictures: DataTypes.STRING
  }, {});
  missions.associate = function(models) {
    // associations can be defined here
    missions.belongsTo(models.company);
    missions.belongsTo(models.levelStudies);
    missions.belongsToMany(models.trainee, {through: 'applications'});
    missions.belongsToMany(models.schools, {through: 'schools&missions'});
  };
  
  return missions;
};