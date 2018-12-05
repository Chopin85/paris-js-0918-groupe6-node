module.exports = (sequelize, DataTypes) => {
  const Trainee = sequelize.define(
    'Trainee',
    {
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
      reasonclosed: DataTypes.STRING
    },
    {}
  );
  Trainee.associate = models => {
    // associations can be defined here
    Trainee.belongsToMany(models.Missions, { through: 'Applications' });
    Trainee.belongsTo(models.Schools);
    Trainee.belongsTo(models.LevelStudies);
  };
  return Trainee;
};
