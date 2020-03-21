const express = require('express');
const view = express.Router();

//CONTROLLERS
const moviesAll = require("../controllers/moviesAll_controller");
const MovieById = require("../controllers/movieByID_controller");
const MoviesByTitle = require("../controllers/movieByTitle_controller");

//RUTAS
view.get('/', moviesAll);
view.get('/:id', MovieById);
view.get("/titulo/:name", MoviesByTitle);

module.exports = view;
