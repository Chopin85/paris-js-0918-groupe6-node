'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      'Trainees',
      [
        {
          lastname: 'Mohamed',
          firstname: 'Kiss',
          email: 'kiss@email.com',
          phone: '06 00 00 00 00',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {},
      'Companies',
      [
        {
          companyName: 'Milkka Corp',
          lastnameContact: 'Paolo',
          firstnameContact: 'Bo',
          phone: '06 60 00 00 00',
          function: 'Responsable RH'
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
    // queryInterface.bulkDelete('Users', [
    //   {
    //     first_lastname: 'Mohamed'
    //   }
    // ]);
  }
};
