'use strict';
const faker = require('faker/locale/es');
 
module.exports = {
  up: (queryInterface, Sequelize) => {
    const Movie_Actor = Array(100).fill().map(() => Object.assign(
      {
        MovieId: faker.random.number({min:1, max:25}),
        ActorId: faker.random.number({min:1, max:10}),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ))

    return queryInterface.bulkInsert('Movie_Actor', Movie_Actor, {});
  },
 
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Movie_Actor', null, {});
  }
};