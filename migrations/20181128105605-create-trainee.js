'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pictures: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      town: {
        allowNull: true,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dateBirth: {
        allowNull: true,
        type: Sequelize.DATE
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isClosed: {
        type: Sequelize.BOOLEAN
      },
      isActived: {
        type: Sequelize.BOOLEAN
      },
      reasonClosed: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      isAdmin: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      school: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      titre: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trainees');
  }
};
