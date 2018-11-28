'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastname: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      adress: {
        type: Sequelize.STRING
      },
      town: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      isClosed: {
        type: Sequelize.BOOLEAN
      },
      isActieved: {
        type: Sequelize.BOOLEAN
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        type: Sequelize.DATE
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainees');
  }
};