module.exports = (sequelize, DataTypes) => {
  const Missions = sequelize.define(
    'Missions',
    {
      titleMission: DataTypes.STRING,
      dateStart: DataTypes.DATE,
      dateEnd: DataTypes.DATE,
      description: DataTypes.STRING(2500),
      isActived: DataTypes.BOOLEAN,
      town: DataTypes.STRING,
      isFull: DataTypes.BOOLEAN,
      updateAt: DataTypes.DATE,
      intro: DataTypes.STRING,
      pictures: DataTypes.STRING
    },
    {}
  );
  Missions.associate = models => {
    // associations can be defined here
    Missions.belongsTo(models.Company);
    Missions.belongsTo(models.LevelStudies);
    Missions.belongsToMany(models.Trainee, { through: 'Applications' });
    Missions.belongsToMany(models.Schools, { through: 'Schools&Missions' });
  };

  return Missions;
};
