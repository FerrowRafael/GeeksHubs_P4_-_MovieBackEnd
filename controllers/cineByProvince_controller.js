const db = require('../models/')
const Op = require('sequelize').Op;

async function CineByProvince (req,res) {
        
    const province = req.params.province
    console.log(province)
    try{
        const cine = await db.Cines.findAll(
            {where: {
               provincia:{
                [Op.like]: `%${province}%`
               } 
            }}
        )
        console.log(cine)
        if(cine){
            return res 
            .status(200)
            .send(cine)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
} 

module.exports = CineByProvince;