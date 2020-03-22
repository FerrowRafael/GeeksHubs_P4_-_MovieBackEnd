'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Actor = sequelize.define('Movie_Actor', {
    MovieId: DataTypes.INTEGER,
    ActorId: DataTypes.INTEGER
  }, {});
  Movie_Actor.associate = function(models) {
    // associations can be defined here
  };
  return Movie_Actor;
};