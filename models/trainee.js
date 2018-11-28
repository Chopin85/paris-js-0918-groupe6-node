'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainee = sequelize.define('trainee', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    pictures: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    town: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    password: DataTypes.STRING,
    isClosed: DataTypes.BOOLEAN,
    isActieved: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    reasonClosed: DataTypes.STRING
  }, {});
  trainee.associate = function(models) {
    // associations can be defined here
    trainee.belongsToMany(models.missions,{through: 'applications'})
  };
  return trainee;
};