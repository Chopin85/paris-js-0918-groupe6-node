"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      interest: DataTypes.STRING,
      noInterest: DataTypes.STRING,
      mayBe: DataTypes.STRING
    },
    {}
  );
  category.associate = function(models) {
    category.belongsTo(models.trainee);
    category.belongsTo(models.company);
    // associations can be defined here
  };
  return category;
};
