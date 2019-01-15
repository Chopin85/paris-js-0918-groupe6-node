module.exports = (sequelize, DataTypes) => {
  const JobTitle = sequelize.define(
    'JobTitle',
    {
      label: DataTypes.STRING
    },
    {}
  );
  JobTitle.associate = models => {
    // associations can be defined here
    JobTitle.belongsToMany(models.Missions, { through: 'Trainee_has_Missions' });
  };
  return JobTitle;
};
