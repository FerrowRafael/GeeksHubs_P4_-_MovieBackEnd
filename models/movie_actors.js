'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Actors = sequelize.define('Movie_Actor', {
    MovieId: DataTypes.INTEGER,
    ActorId: DataTypes.INTEGER
  }, {});
  Movie_Actor.associate = function(models) {
    // associations can be defined here
  };
  return Movie_Actors;
};