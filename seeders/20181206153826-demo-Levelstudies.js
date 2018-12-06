'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Levelstudies',
      [
        {
          label: 'Bac+2',
          level: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          label: 'Bac+3',
          level: '3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          label: 'Bac+4',
          level: '4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          label: 'Bac+5',
          level: '5',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
