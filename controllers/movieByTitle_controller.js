const db = require('../models/')
const Op = require('sequelize').Op;

async function MoviesByTitle (req,res) {
        
    const title = req.params.name
    console.log(title)
    try{
        const movie = await db.Movies.findAll(
            {where: {
               titulo:{
                [Op.like]: `%${title}%`
               } 
            }}
        )
        console.log(movie)
        if(movie){
            return res 
            .status(200)
            .send(movie)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
} 

module.exports = MoviesByTitle;