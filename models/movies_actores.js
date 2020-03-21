'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies_actores = sequelize.define('Movies_actores', {
    titulo: DataTypes.STRING
  }, {});
  Movies_actores.associate = function(models) {
    // associations can be defined here
  };
  return Movies_actores;
};