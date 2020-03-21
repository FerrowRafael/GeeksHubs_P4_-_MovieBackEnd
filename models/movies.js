'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    titulo: DataTypes.STRING,
    isEstreno: DataTypes.BOOLEAN,
    estreno: DataTypes.DATE
  }, {});
  
  Movies.associate = function(models) {
    // Movies.belongsToMany(models.Actores,{
    //   foreignKey:`id`,
    //   target_Key:`actores`
    // });
    // models.Movies.belongsToMany(models.Cines,{through:models.movies_cines});
  };
  return Movies;
};