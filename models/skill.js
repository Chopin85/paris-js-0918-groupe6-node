'use strict';
module.exports = (sequelize, DataTypes) => {
  const skill = sequelize.define('skill', {
    skill_1: DataTypes.STRING,
    skill_2: DataTypes.STRING,
    skill_3: DataTypes.STRING
  }, {});
  skill.associate = function(models) {
    // associations can be defined here
    skill.belongsToMany(models.trainee,{through: 'trainee_has_skill'})
    skill.belongsToMany(models.missions,{through: 'trainee_has_missions'})
  };
  return skill;
};