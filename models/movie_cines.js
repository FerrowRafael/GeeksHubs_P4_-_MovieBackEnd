'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Cines = sequelize.define('Movie_Cines', {
    MovieId: DataTypes.INTEGER,
    CineId: DataTypes.INTEGER,
  }, {});
  
  Movie_Cines.associate = function(models) {
    // associations can be defined here
  };
  return Movie_Cines;
};