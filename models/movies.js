'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    titulo: DataTypes.STRING,
    isEstreno: DataTypes.BOOLEAN,
    estreno: DataTypes.DATE
  }, {});
  
  Movies.associate = function(models) {
    models.Movies.belongsToMany(models.Cines,{through:models.movies_cines});
    models.Movies.belongsToMany(models.Actores,{through:models.movies_actores});
  };
  return Movies;
};