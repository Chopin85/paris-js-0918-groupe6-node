module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    'Company',
    {
      companyName: DataTypes.STRING,
      lastnameContact: DataTypes.STRING,
      firstnameContact: DataTypes.STRING,
      phone: DataTypes.STRING,
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
  Company.associate = models => {
    // associations can be defined here
    Company.hasMany(models.Missions, {
      // foreignKey: {
      //   allowNull: false
      // }
    });
  };
  return Company;
};
