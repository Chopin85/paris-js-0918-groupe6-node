module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Missions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleMission: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateStart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateEnd: {
        allowNull: false,
        type: Sequelize.DATE
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isActived: {
        type: Sequelize.BOOLEAN
      },
      town: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isFull: {
        type: Sequelize.BOOLEAN
      },
      intro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Missions')
};
