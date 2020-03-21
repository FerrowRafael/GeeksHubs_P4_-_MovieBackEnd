'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actores', [{
      name: "John",
      surname: "Travolta",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Leonardo",
      surname: "Dicaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Brad",
      surname: "Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actores', null, {});
  }
};