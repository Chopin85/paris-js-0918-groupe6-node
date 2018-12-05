'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schools = sequelize.define(
    'Schools',
    {
      name: DataTypes.STRING,
      isActived: DataTypes.STRING
    },
    {}
  );
  Schools.associate = function(models) {
    // associations can be defined here
    Schools.hasMany(models.Trainee);
    Schools.belongsToMany(models.Missions, { through: 'Schools&Missions' });
  };
  return Schools;
};
