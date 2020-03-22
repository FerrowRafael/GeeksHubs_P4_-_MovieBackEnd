'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cines = sequelize.define('Cines', {
    nombre: DataTypes.STRING,
    provincia: DataTypes.STRING
  }, {});
  Cines.associate = function(models) {
    Cines.belongsToMany(models.Movies, {
      through: 'Movie_Cine',
      as: 'cines',
      foreignKey: 'CineId',
    })
  };
  return Cines;
};