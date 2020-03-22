const express = require('express');
const view = express.Router();

//CONTROLLERS
const cinesAll = require("../controllers/cinesAll_controller");
const cineById = require("../controllers/cineByID_controller");
const CineByName = require("../controllers/cineByName_controller");
const CineByProvince = require("../controllers/cineByProvince_controller");
const CineByPremiere = require("../controllers/cineByPremiere_controller");

//RUTAS
view.get('/', cinesAll);
view.get('/:id', cineById);
view.get("/nombre/:name", CineByName);
view.get("/provincia/:province", CineByProvince);
view.get("/estreno/:name", CineByPremiere); //Filtro de peliculas de Estreno


module.exports = view;
