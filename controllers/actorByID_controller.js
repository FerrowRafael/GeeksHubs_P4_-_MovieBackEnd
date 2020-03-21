const db = require('../models');

const actorById =(req, res) => {

    db.Actores.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))        
}
      
module.exports = actorById;