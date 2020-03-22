'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie_Cine = sequelize.define('Movie_Cine', {
    MovieId: DataTypes.INTEGER,
    CineId: DataTypes.INTEGER,
  }, {});
  Movie_Cine.associate = function(models) {
    // associations can be defined here
  };
  return Movie_Cine;
};