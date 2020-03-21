const db = require('../models/')
 
async function cinesAll (req, res) {
    try{
        const cine = await db.Cines.findAll()
        console.log(cine)
        if(cine){
            return res 
            .status(200)
            .send(cine)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }
};

module.exports = cinesAll;