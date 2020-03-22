'use strict';

const faker = require('faker/locale/es');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const Movie_Cines = Array(100).fill().map(() => Object.assign(
      {
        MovieId: faker.random.number({min:1, max:25}),
        CineId: faker.random.number({min:1, max:5}),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ))

    return queryInterface.bulkInsert('Movie_Cines', Movie_Cines, {});
  },
 
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Movie_Cines', null, {});
  }
};