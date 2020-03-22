const db = require('../models');

//Filtro de Cines por ID
const cineById =(req, res) => {

    db.Cines.findOne({
        where:{
            id:req.params.id
        }
    })
    
    .then(item =>{
        return res.status(200).send(item)})

    .catch(err => console.error(err))        
}
      
module.exports = cineById;