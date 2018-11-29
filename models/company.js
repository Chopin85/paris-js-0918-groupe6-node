module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define(
    'company',
    {
      lasnameContact: DataTypes.STRING,
      firstnameContact: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      function: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      isActived: DataTypes.BOOLEAN,
      isClosed: DataTypes.BOOLEAN,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      reasonClosed: DataTypes.STRING,
      pictures: DataTypes.STRING
    },
    {}
  );
  company.associate = models => {
    // associations can be defined here
    company.hasMany(models.missions);
  };
  return company;
};
