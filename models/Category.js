module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      interest: DataTypes.STRING,
      noInterest: DataTypes.STRING,
      mayBe: DataTypes.STRING
    },
    {}
  );

  Category.associate = function(models) {
    Category.belongsTo(models.Trainee);
    Category.belongsTo(models.Company);
  };
  return Category;
};
