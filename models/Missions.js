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
      intro: DataTypes.STRING,
      pictures: DataTypes.STRING
    },
    {}
  );
  Missions.associate = models => {
    // associations can be defined here
    Missions.belongsTo(models.Company, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
    Missions.belongsTo(models.LevelStudies, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
    Missions.belongsToMany(
      models.Trainee,
      {
        through: 'Applications'
      }
      // foreignKey: {
      //   allowNull: false
      // }
    );
    Missions.belongsToMany(
      models.Schools,
      {
        through: 'Schools&Missions'
      }
      // {
      //   foreignKey: {
      //     allowNull: false
      //   }
      // }
    );
  };

  return Missions;
};
