'use strict';
 
module.exports = {
  
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addConstraint('Movie_Cines', ['MovieId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieCine_Movies_1',
      references: {
        table: 'Movies',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'Cascade',
    }),
    queryInterface.addConstraint('Movie_Cines', ['CineId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieCine_Cines_1',
      references: {
        table: 'Cines',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'Cascade',
    }),
  ])
  },
 
  down: (queryInterface, Sequelize) => {
   return [
    queryInterface.removeConstraint('Movie_Cines', 'FK_Movies_1'),
    queryInterface.removeConstraint('Movie_Cines', 'FK_Cines_1'),
  ]
  }
};