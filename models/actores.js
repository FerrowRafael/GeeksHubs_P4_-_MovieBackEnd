'use strict';

module.exports = (sequelize, DataTypes) => {

  const Actores = sequelize.define('Actores', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {});
  
  Actores.associate = function(models) {
    Actores.belongsToMany(models.Movies, {
      through: 'Movie_Actors',
      as: 'peliculasA',
      foreignKey: 'ActorId',
    })
  };

  return Actores;
};