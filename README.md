# GeeksHubs_P4_-_MovieBackEnd

API Rest de peliculas, cines y actores

## Table of Content
- Getting Started
- Built With
- Conocimientos
- Partes API
- Filtros API
- Author
- Base de Datos

## Getting Started 🚀 

### Clonando repositorio
git clone https://github.com/FerrowRafael/GeeksHubs_P4_-_MovieBackEnd.git

### Utilizando Sequelize-cli

Instala dependencia
$ npm install --save-dev sequelize-cli

Creando modelo 
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

Migrando modelos a DB
npx sequelize-cli db:migrate

Creando semilla
npx sequelize-cli seed:generate --name demo-user

Migrando semilla a DB
npx sequelize-cli db:seed:all

## Built With 🛠️    

* Javascript
* Node
* Express
* SQL
* Sequelite
* GIT
  
Otros
* Postman
* XAMPP
* Trello

Dependencias 
* 

## Conocimientos

* Llamadas SQL
* 

## Partes API

### Controllers

Actores
- ActoresAll
- ActorByID
- ActorByName
- ActorByMovie

Cine
- CinesAll
- CineByID
- CineByName
- CineByPremiere 

Peliculas
- MoviesAll
- MovieByID
- MovieByTitle

Ejemplo controllers/actorByMovie_controller.js
"const db = require('../models');

const ActorByMovie = async (req, res) => {

    let nombre = req.params.name
    
    try {
        const actores = await db.Actores.findOne({
            where: { name: nombre},
            include: [{
                model: db.Movies,
                as: 'peliculasA',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            }],
        });
        // console.log(JSON.stringify(actores));
        res.send(actores)    
    } 
    
    catch (error) {
        console.log(error);
    }
};
 
module.exports = ActorByMovie;"

### Migrations

### Models

- Index
- Movies
- Movie_actors
- Movie_cines
- Actores
- Cines

Ej. models/movies.js

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


### Routes

Ejemplo routes/actores.js

¨const express = require('express');
const view = express.Router();

//CONTROLLERS
const actoresAll = require("../controllers/actoresAll_controller");
const actorById = require("../controllers/actorByID_controller");
const actorByName = require("../controllers/actorByName_controller");
const actorByMovie = require("../controllers/actorByMovie_controller");

//RUTAS
view.get('/', actoresAll);
view.get('/:id', actorById);
view.get('/nombre/:name',  actorByName);
view.get('/pelicula/:name', actorByMovie); //Filtro de peliculas 

module.exports = view;
¨


### Seeders




## Filtros API

- 




## Author 👨🏼‍💻

* **Rafael Fernández Gómez** - [FerrowRafael](https://github.com/FerrowRafael)


## Base de Datos

<img src="./public/images/Base&#32;de&#32;Datos.jpg" title="DB-PeliculasExpress" alt="DB-PeliculasExpress"></a>


