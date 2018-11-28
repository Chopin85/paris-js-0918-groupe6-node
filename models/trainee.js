'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainee = sequelize.define('trainee', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    pictures: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    town: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    password: DataTypes.STRING,
    isClosed: DataTypes.BOOLEAN,
    isActived: DataTypes.BOOLEAN,
    updatedAt: DataTypes.DATE,
    createAt: DataTypes.DATE,
    reasonclosed: DataTypes.STRING
  }, {});
  trainee.associate = function(models) {
    // associations can be defined here
    trainee.belongsToMany(models.missions, {through: 'applications'});
    trainee.belongsTo(models.schools);
    trainee.belongsTo(models.levelStudies);
  };
  return trainee;
};