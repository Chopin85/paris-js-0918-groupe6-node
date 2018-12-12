

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusAppli: {
        type: Sequelize.BOOLEAN
      },
      dateAppli: {
        type: Sequelize.DATE
      },
      preselection: {
        type: Sequelize.STRING
      },
      selection: {
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
