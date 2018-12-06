'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: {
        type: Sequelize.STRING
      },
      lastnameContact: {
        type: Sequelize.STRING
      },
      firstnameContact: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      function: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      isActieved: {
        type: Sequelize.BOOLEAN
      },
      isClosed: {
        type: Sequelize.BOOLEAN
      },
      reasonClosed: {
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies');
  }
};
