'use strict';
const faker = require('faker/locale/es');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const movies = Array(20).fill().map(() => Object.assign(
      {
        titulo: faker.lorem.words(),
        isEstreno: faker.random.boolean(),
        estreno: faker.date.past(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ))

    return queryInterface.bulkInsert('Movies', movies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};