// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE");
  next();
});

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS
const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');
const cinesRouter = require('./routes/cines');
const actoresRouter = require('./routes/actores');

//ENDPOINTS
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/cines', cinesRouter);
app.use('/actores', actoresRouter);

module.exports = app;
