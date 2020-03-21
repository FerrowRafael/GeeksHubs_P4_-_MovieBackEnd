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
view.get('/estreno/*', actorByMovie); //Filtro de peliculas 
//EXTRA: Búsqueda por coincidencia de Nombre y/o Apellidos

module.exports = view;
