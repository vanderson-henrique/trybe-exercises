'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Authors', 
    [
      {
        first_name: 'George',
        middle_name: 'R. R.',
        last_name: 'Martin',
        birthday: '1948-09-20',
        nationality: 'norte-americano'
      },
      {
        first_name: 'J.',
        middle_name: 'R. R.',
        last_name: 'Tolkien',
        birthday: '1892-01-03',
        nationality: 'britânico'
      },
      {
        first_name: 'Isaac',
        middle_name: null,
        last_name: 'Asimov',
        birthday: '1920-01-20',
        nationality: 'russo-americano'
      },
      {
        first_name: 'Frank',
        middle_name: null,
        last_name: 'Herbert',
        birthday: '1920-02-11',
        nationality: 'norte-americano'
      },
      {
        first_name: 'Júlio',
        middle_name: null,
        last_name: 'Verne',
        birthday: '1905-03-24',
        nationality: 'francês'
      },
    ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Authors', null, {})
};
