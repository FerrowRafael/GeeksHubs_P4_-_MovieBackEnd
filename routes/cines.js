const express = require('express');
const view = express.Router();

//CONTROLLERS
const cinesController = require("../controllers/cines_controller");
const OrderIdC = require("../controllers/cineByID_controller");
// const CinesByTitle = require("../controllers/cineByTitle_controller");
// const CinesByProvince = require("../controllers/CinesByProvince_controller");

//RUTAS
view.get('/', cinesController);
view.get('/:id', OrderIdC);
// view.get("/:name", CinesByTitle);
// view.get("/:provincia", CinesByProvince);
//Filtro de peliculas de Estreno

module.exports = view;
