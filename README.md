# GeeksHubs_P4_-_MovieBackEnd 🎞

API Rest de peliculas, donde desde nuestra Base de Datos podemos buscar peliculas, actores y cines donde se proyectan esas peliculas.

## Table of Content

- [Built With](#Built-With)
- [Conocimientos](#Conocimientos)
- [Getting Started](#Getting-Started)
- [Partes API](#Partes-API)
- [Ejemplo practico filtro](#Ejemplo-practico-filtro)
- [Documentation](#Documentation)
- [Author](#Author)
- [Base de Datos](#Base-de-Datos)


## Built With 🛠️ (#Built-With) 

* Javascript
* Node
* Express
* SQL
* Sequelite
* GIT
  
Otros
* Postman
* XAMPP
* Trello


## Conocimientos 🧠 (#Conocimientos)

* Llamadas SQL
* Estructura Express


## Getting Started 🚀 (#Getting-Started)

### Clonando repositorio

```js
git clone https://github.com/FerrowRafael/GeeksHubs_P4_-_MovieBackEnd.git
```

### Instalación dependencias

- Express
- Morgan
- Sequelize / Seguelize-cli
- Sqlite3
- Faker
- Nodemon

### Comenzando proyecto Express

Utilizamos express-generator para que nos genere una estructura de proyecto a partir de la cual trabajar.

```js
npm install express-generator -g

express --view=pug myapp

cd myapp

npm install

DEBUG=myapp:* npm start
```

### Configuración Sequelize-CLI

Instalación de dependencia
```js
$ npm install --save-dev sequelize-cli
```

Creando modelo 
```js
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

Migrando modelos a DB
```js
npx sequelize-cli db:migrate
```

Creando semilla
```js
npx sequelize-cli seed:generate --name demo-user
```

Migrando semilla a DB
```js
npx sequelize-cli db:seed:all
```


### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```js
npm start
```

## Partes API 🗄 (#Partes-API)

- Configuration file
- Controllers
- Migrations
- Models
- Router
- Seeders
  
### Configuration file

Este es el archivo de configuración de nuestra API

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "peliculas-express",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "peliculas-express_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "peliculas-express_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

### Controllers

Los controladores tienen la lógica necesaria para obtener la información de la Base de Datos
Mis controladores son: 

#### Actores
- ActoresAll
- ActorByID
- ActorByName
- ActorByMovie

#### Cine
- CinesAll
- CineByID
- CineByName
- CineByPremiere 

#### Peliculas
- MoviesAll
- MovieByID
- MovieByTitle

Ejemplo: controllers/actorByMovie_controller.js
```js
"const db = require('../models');

const ActorByMovie = async (req, res) => {

    let nombre = req.params.name
    
    try {
        const actores = await db.Actores.findOne({
            where: { name: nombre},
            include: [{
                model: db.Movies,
                as: 'peliculasA',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            }],
        });
        // console.log(JSON.stringify(actores));
        res.send(actores)    
    } 
    
    catch (error) {
        console.log(error);
    }
};
 
module.exports = ActorByMovie;"
```

### Migrations

En las migraciones se almacena la estructura de cada tabla de la Base de Datos 
Ejemplo: migrations/++-create-cines.js
```js
module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cines');
  }
};
```

### Models

En los modelos se coloca el tipo de datos que tendran los valores de cada tabla de la Base de Datos y las relaciones con el resto de tablas.
Mis modelos son:

- Index
- Movies
- Movie_actors
- Movie_cines
- Actores
- Cines

Ej. models/movies.js
```js
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    titulo: DataTypes.STRING,
    resumen: DataTypes.TEXT,
    isEstreno: DataTypes.BOOLEAN,
    estreno: DataTypes.DATE
  }, {});
  
  Movies.associate = function(models) {
    Movies.belongsToMany(models.Cines, {
      through: 'Movie_Cine',
      as: 'peliculasC',
      foreignKey: 'MovieId',
    }),
    Movies.belongsToMany(models.Actores, {
      through: 'Movie_Actors',
      as: 'peliculasA',
      foreignKey: 'MovieId',
    })
  };
  
  return Movies;
};
```

### Routes

Ejemplo routes/actores.js
```js
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
```
Para usar cada ruta puedes usar aplicaciones como Postman e introducir la ruta por ejemplo
```js
http://localhost:3000/movies/titulo/(titulo pelicula)
```
Y obtendras todas las peliculas que coincidan con el titulo introducido

### Seeders

Ejemplo seeder/++-movies.js

```js
const faker = require('faker/locale/es');

¨module.exports = {
  up: (queryInterface, Sequelize) => {
    const movies = Array(20).fill().map(() => Object.assign(
      {
        titulo: faker.lorem.words(),
        resumen: faker.lorem.paragraph(),
        isEstreno: faker.random.boolean(),
        estreno: faker.date.past(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ))

    return queryInterface.bulkInsert('Movies', movies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
}; ¨
```

He utilizado la libreria Faker para poblar las tablas de datos random.


## Ejemplo practico filtro (#Ejemplo-practico-filtro)

Si queremos buscar por ejemplo a un actor en particular y queremos saber también las peliculas en las que ha participado
Introducimos la ruta:
``` js
http://localhost:3000/actores/pelicula/Graciela
```

Obtendremos el siguiente JSON
```json
{
    "id": 2,
    "name": "Graciela",
    "surname": "Loya",
    "createdAt": "2020-03-22T22:08:01.000Z",
    "updatedAt": "2020-03-22T22:08:01.000Z",
    "peliculasA": [
        {
            "id": 14,
            "titulo": "consequuntur suscipit aspernatur",
            "resumen": "Nostrum velit placeat et veniam. Qui totam omnis ullam et qui commodi. Ut provident quasi delectus dolor nihil asperiores non consectetur a. Adipisci accusantium aut autem velit possimus ut quo sint necessitatibus.",
            "isEstreno": false,
            "estreno": "2019-11-18T03:26:17.000Z"
        },
        {
            "id": 18,
            "titulo": "ex aliquam modi",
            "resumen": "Quasi et id placeat eveniet molestiae vero. Aspernatur voluptas ipsa voluptate. Quia voluptatem eius blanditiis deleniti. Omnis optio eveniet omnis facere magnam. Similique ut qui est consequatur rerum.",
            "isEstreno": false,
            "estreno": "2019-10-09T15:29:31.000Z"
        },
        {
            "id": 16,
            "titulo": "qui ex eum",
            "resumen": "Magnam asperiores ratione est consectetur incidunt fugit non saepe. Dolores ut recusandae debitis nam incidunt dolor quo culpa. Consequatur laudantium dolor aut ea hic voluptatem et modi qui. Quia nostrum quis dolorem sint laborum.",
            "isEstreno": false,
            "estreno": "2019-06-15T23:57:38.000Z"
        },
.
.
.
    ]
}
```


## Documentation 📚 #Documentation)

- [Express](https://expressjs.com/)
- [Seguelize CLI](https://sequelize.org/master/manual/migrations.html)
  

## Author 👨🏼‍💻 (#Author)

* **Rafael Fernández Gómez** - [FerrowRafael](https://github.com/FerrowRafael)


## Base de Datos (#Base-de-Datos)

<img src="./public/images/Base&#32;de&#32;Datos.jpg" title="DB-PeliculasExpress" alt="DB-PeliculasExpress"></a>


