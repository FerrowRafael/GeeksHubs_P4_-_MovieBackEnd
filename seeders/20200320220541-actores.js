'use strict';
const faker = require('faker/locale/es');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Actores = Array(10).fill().map(() => Object.assign(
      {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ))

    return queryInterface.bulkInsert('Actores', Actores, {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actores', null, {});
  }
};
