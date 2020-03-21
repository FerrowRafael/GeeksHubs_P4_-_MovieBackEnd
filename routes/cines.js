const express = require('express');
const view = express.Router();

//CONTROLLERS
const cinesController = require("../controllers/cines_controller");
const OrderIdC = require("../controllers/cineByID_controller");
const CineByName = require("../controllers/cineByName_controller");
const CineByProvince = require("../controllers/cineByProvince_controller");

//RUTAS
view.get('/', cinesController);
view.get('/:id', OrderIdC);
view.get("/nombre/:name", CineByName);
view.get("/provincia/:province", CineByProvince);
//Filtro de peliculas de Estreno

module.exports = view;
