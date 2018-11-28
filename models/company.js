"use strict";
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define(
    "company",
    {
      lastnameContact: DataTypes.STRING,
      firstnameContact: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      function: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      isActived: DataTypes.BOOLEAN,
      isClosed: DataTypes.BOOLEAN,
      reasonClosed: DataTypes.STRING,
      pictures: DataTypes.STRING
    },
    {}
  );
  company.associate = function(models) {
    company.hasMany(models.missions);
    company.hasMany(models.category);
    // associations can be defined here
  };
  return company;
};
