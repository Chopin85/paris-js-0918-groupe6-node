module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Missions',
      [
        {
          CompanyId: 1,
          titleMission: 'Mission 1',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 2,
          titleMission: 'Mission 1',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 1,
          titleMission: 'Mission 2',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 2,
          titleMission: 'Mission 2',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 3,
          titleMission: 'Mission 1',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 4,
          titleMission: 'Mission 1',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 5,
          titleMission: 'Mission ',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,

          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
