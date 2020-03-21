'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cines = sequelize.define('Cines', {
    nombre: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {});
  Cines.associate = function(models) {
    models.Cines.belongsToMany(models.Movies,{through:models.movies_cines});
  };
  return Cines;
};