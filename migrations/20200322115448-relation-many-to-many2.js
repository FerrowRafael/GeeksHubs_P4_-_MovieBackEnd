'use strict';
 
module.exports = {
  
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addConstraint('Movie_Actors', ['MovieId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieActor_Movies_1',
      references: {
        table: 'Movies',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'Cascade',
    }),
    queryInterface.addConstraint('Movie_Actors', ['ActorId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieActor_Actores_1',
      references: {
        table: 'Actores',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'Cascade',
    }),
  ])
  },
 
  down: (queryInterface, Sequelize) => {
   return [
    queryInterface.removeConstraint('Movie_Actors', 'FK_Movies_1'),
    queryInterface.removeConstraint('Movie_Actors', 'FK_Actors_1'),
  ]
  }
};