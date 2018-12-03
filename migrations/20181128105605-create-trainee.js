"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("trainees", {
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
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      town: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isClosed: {
        type: Sequelize.BOOLEAN
      },
      isActieved: {
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("trainees");
  }
};
