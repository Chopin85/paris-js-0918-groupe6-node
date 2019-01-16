module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusAppli: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      dateAppli: {
        allowNull: true,
        type: Sequelize.DATE
      },
      preselection: {
<<<<<<< HEAD
=======
        allowNull: true,
>>>>>>> appli
        type: Sequelize.BOOLEAN
      },
      selection: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Applications')
};
