 const db = require('../models/')
 
async function moviesAll (req, res) {
    try{
        const movie = await db.Movies.findAll()
        if(movie){
            return res 
            .status(200)
            .send(movie)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
};

module.exports = moviesAll;
