'use strict';

const faker = require('faker/locale/es');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Cines = Array(5).fill().map(() => Object.assign(
      {
        nombre: faker.company.companyName(),
        provincia: faker.address.state(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ))

    return queryInterface.bulkInsert('Cines', Cines, {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cines', null, {});
  }
};
