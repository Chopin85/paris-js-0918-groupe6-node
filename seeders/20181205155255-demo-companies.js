'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        companyName: 'Microsoft',
        lastnameContact: 'Rossi',
        firstnameContact: 'Mario',
        phone: '0652407389',
        function: 'RH',
        password: '1234',
        email: 'mario.rossi@microsoft.com',
        isActived: true,
        isClosed: false,
        pictures:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/M_box.svg/langfr-280px-M_box.svg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Google',
        lastnameContact: 'Gerry',
        firstnameContact: 'Neri',
        phone: '0652407389',
        function: 'RH',
        password: '1234',
        email: 'gerry.neri@google.com',
        isActived: true,
        isClosed: false,
        pictures:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/M_box.svg/langfr-280px-M_box.svg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Goole',
        lastnameContact: 'Alberto',
        firstnameContact: 'Neri',
        phone: '0652407389',
        function: 'RH',
        password: '1234',
        email: 'alberto.neri@google.com',
        isActived: true,
        isClosed: false,
        pictures:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/M_box.svg/langfr-280px-M_box.svg.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
