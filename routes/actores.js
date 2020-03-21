const express = require('express');
const view = express.Router();

//CONTROLLERS
const actoressController = require("../controllers/actores_controller");
const OrderIdA = require("../controllers/actorByID_controller");
const ActorByName = require("../controllers/actorByName_controller");

//RUTAS
view.get('/', actoressController);
view.get('/:id', OrderIdA);
view.get('/nombre/:id',  ActorByName);
//Filtro de peliculas de Estreno

module.exports = view;
