'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      titulo: "American Pie 1",
      isEstreno: false,
      estreno: "1999-02-02T09:46:07.656Z",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: "American Pie 2",
      isEstreno: false,
      estreno: "2001-02-02T09:46:07.656Z",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: "Joker",
      isEstreno: true,
      estreno: "2019-02-02T09:46:07.656Z",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};