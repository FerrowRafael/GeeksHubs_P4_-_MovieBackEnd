'use strict';
module.exports = (sequelize, DataTypes) => {
    const MoviesActores = sequelize.define('movies_actores', {
        MovieId: {
          type: DataTypes.INTEGER,
          references: {
            model: Movies, // 'Movies' would also work
            key: 'id'
          }
        },
        ActorId: {
          type: DataTypes.INTEGER,
          references: {
            model: Actores, // 'Actors' would also work
            key: 'id'
          }
        }
      });
  
  Movies.associate = function(models) {
    models.Movies.belongsToMany(models.Actores,{through:models.movies_actores});
    models.Actores.belongsToMany(models.Movies,{through:models.movies_actores});
  };
  return MoviesActores;
};