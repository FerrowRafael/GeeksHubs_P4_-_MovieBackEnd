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
      as: 'peliculasC',
      foreignKey: 'MovieId',
    }),
    Movies.belongsToMany(models.Actores, {
      through: 'Movie_Actors',
      as: 'peliculasA',
      foreignKey: 'MovieId',
    })
  };
  
  return Movies;
};