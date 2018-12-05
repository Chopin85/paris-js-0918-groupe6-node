module.exports = (sequelize, DataTypes) => {
  const JobTitle = sequelize.define(
    'JobTitle',
    {
      Ingénierie: DataTypes.STRING,
      Finance: DataTypes.STRING,
      Marketing: DataTypes.STRING,
      Développement: DataTypes.STRING,
      Audit: DataTypes.STRING,
      Logistique: DataTypes.STRING
    },
    {}
  );
  JobTitle.associate = models => {
    // associations can be defined here
    JobTitle.belongsToMany(models.Missions, { through: 'Trainee_has_Missions' });
  };
  return JobTitle;
};
