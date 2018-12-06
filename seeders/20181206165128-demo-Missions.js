module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Missions',
      [
        {
          titleMission: 'Missions 1',
          dateStart: new Date('2018/10/10'),
          dateEnd: new Date('2019/10/10'),
          description: 'missions missions missions missions missions missions',
          isActived: true,
          town: 'Paris',
          intro: 'missions missions',
          pictures: 'url',
          CompanyId: '1'
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Missions', null, {})
  /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
};
