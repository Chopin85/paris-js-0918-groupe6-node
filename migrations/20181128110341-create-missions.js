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
        type: Sequelize.STRING
      },
      dateStart: {
        type: Sequelize.DATE
      },
      dateEnd: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      isActieved: {
        type: Sequelize.BOOLEAN
      },
      town: {
        type: Sequelize.STRING
      },
      isFull: {
        type: Sequelize.BOOLEAN
      },
      updateAt: {
        type: Sequelize.DATE
      },
      intro: {
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
