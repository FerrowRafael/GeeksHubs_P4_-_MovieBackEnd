'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    titulo: DataTypes.STRING,
    resumen: DataTypes.TEXT,
    isEstreno: DataTypes.BOOLEAN,
    estreno: DataTypes.DATE
  }, {});
  
  Movies.associate = function(models) {
    Movies.belongsToMany(models.Cines, {
      through: 'Movie_Cine',
      as: 'peliculas',
      foreignKey: 'MovieId',
    }),
    Movies.belongsToMany(models.Actores, {
      through: 'Movie_Actor',
      as: 'peliculas',
      foreignKey: 'MovieId',
    })
  };
  return Movies;
};