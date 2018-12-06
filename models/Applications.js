module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define(
    'Applications',
    {
      statusAppli: DataTypes.BOOLEAN,
      dateAppli: DataTypes.DATE,
      preselection: DataTypes.STRING,
      selection: DataTypes.BOOLEAN
    },
    {}
  );
  Applications.associate = models => {
    // associations can be defined here
    Applications.belongsTo(models.Missions);
    Applications.belongsTo(models.Trainee);
  };
  return Applications;
};
