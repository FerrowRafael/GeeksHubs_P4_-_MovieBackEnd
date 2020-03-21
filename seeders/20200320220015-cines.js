'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cines', [{
      nombre: "Cines Lys",
      provincia: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "ABC Park",
      provincia: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: "Cines Callao",
      provincia: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cines', null, {});
  }
};
