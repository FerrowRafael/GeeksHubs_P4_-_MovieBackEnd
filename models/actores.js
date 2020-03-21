'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actores = sequelize.define('Actores', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {});
  Actores.associate = function(models) {
    // models.Actores.belongsToMany(models.Movies,{through:models.movies_actores});
  };
  return Actores;
};