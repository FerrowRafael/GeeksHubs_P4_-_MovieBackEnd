'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Actors = sequelize.define('Movie_Actors', {
    MovieId: DataTypes.INTEGER,
    ActorId: DataTypes.INTEGER
  }, {});
  
  Movie_Actors.associate = function(models) {
    // associations can be defined here
  };
  return Movie_Actors;
};