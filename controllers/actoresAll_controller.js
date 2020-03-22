const db = require('../models/')
 
//Filtro con todos los Actores
const actoresAll = async (req, res) =>{
    try{
        const actor = await db.Actores.findAll()
        if(actor){
            return res 
            .status(200)
            .send(actor)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
};

module.exports = actoresAll;