const db = require('../models/')
const Op = require('sequelize').Op;

const ActorByName = async (req,res) => {
  
    const title = req.params.name
    console.log(title)
    try{
        const actor = await db.Actores.findAll(
            {where: {
               name:{
                [Op.like]: `%${title}%`
               } 
            }}
        )
        console.log(actor)
        if(actor){
            return res 
            .status(200)
            .send(actor)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
} 

module.exports = ActorByName;