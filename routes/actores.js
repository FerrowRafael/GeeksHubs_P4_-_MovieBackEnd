const express = require('express');
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
