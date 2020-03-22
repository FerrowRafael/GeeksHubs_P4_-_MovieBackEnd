'use strict';
 
module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addConstraint('Movie_Actor', ['MovieId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieActor_Movies_1',
      references: {
        table: 'Movies',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
    queryInterface.addConstraint('Movie_Actor', ['ActorId'], {
      type: 'FOREIGN KEY',
      name: 'FK_MovieActor_Actores_1',
      references: {
        table: 'Actores',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    }),
  ])
  },
 
  down: (queryInterface, Sequelize) => {
   return [
    queryInterface.removeConstraint('Movie_Actor', 'FK_Movies_1'),
    queryInterface.removeConstraint('Movie_Actor', 'FK_Actors_1'),
  ]
  }
};