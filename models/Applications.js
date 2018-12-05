module.exports = (sequelize, DataTypes) => {
  const Applications = sequelize.define(
    'Applications',
    {
      statusAppli: DataTypes.STRING,
      dateAppli: DataTypes.DATE,
      preselection: DataTypes.STRING,
      selection: DataTypes.BOOLEAN
    },
    {}
  );
  Applications.associate = models => {
    // associations can be defined here
  };
  return Applications;
};
