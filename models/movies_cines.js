'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies_cines = sequelize.define('Movies_cines', {
    titulo: DataTypes.STRING
  }, {});
  Movies_cines.associate = function(models) {
    // associations can be defined here
  };
  return Movies_cines;
};