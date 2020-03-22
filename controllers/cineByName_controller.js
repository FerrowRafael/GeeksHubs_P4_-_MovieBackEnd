const db = require('../models/')
const Op = require('sequelize').Op;

//Filtro de Cines por nombre 
const CineByName = async (req,res) => {
        
    const title = req.params.name
    console.log(title)

    try{
        const cine = await db.Cines.findAll(
            {where: {
               nombre:{
                [Op.like]: `%${title}%`
               } 
            }}
        )
        console.log(cine)
        if(cine){
            return res 
            .status(200)
            .send(cine)
        }       
    }

    catch(error){
        console.error('Algo fallo')
    }
} 

module.exports = CineByName;