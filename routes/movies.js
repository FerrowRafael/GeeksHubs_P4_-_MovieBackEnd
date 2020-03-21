const express = require('express');
const view = express.Router();

//CONTROLLERS
const moviesController = require("../controllers/movies_controller");
const OrderIdM = require("../controllers/movieByID_controller");
const MoviesByTitle = require("../controllers/movieByTitle_controller");

//RUTAS
view.get('/', moviesController);
view.get('/:id', OrderIdM);
view.get("/titulo/:name", MoviesByTitle);

module.exports = view;
