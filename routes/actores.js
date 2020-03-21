const express = require('express');
const router = express.Router();

//CONTROLLERS
const actoressController = require("../controllers/actores_controller");
const OrderIdA = require("../controllers/actorByID_controller");

//RUTAS
view.get('/', actoressController);
view.get('/:id', OrderIdA);
//Filtro de peliculas de Estreno

module.exports = router;
