 const db = require('../models/')
 
async function moviesController (req, res) {
    try{
        const movie = await db.Movies.findAll()
        console.log(movie)
        if(movie){
            return res 
            .status(200)
            .send(movie)
        }
       

    }catch(error){
        console.error('Algo fallo')
    }
};

module.exports = moviesController;