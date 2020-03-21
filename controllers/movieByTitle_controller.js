const db = require('../models/')
const Op = require('sequelize').Op;

async function MoviesByTitle (req,res){
        
    const titulo = req.params.name
    try{
        const movie = await db.Movies.findAll(
            {where: {
               name:{
                [Op.like]: `${titulo}%`
               } 
            }
            
            }
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