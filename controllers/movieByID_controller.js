const db = require('../models');

const MovieById = (req, res) => {

    db.Movies.findOne({
        where:{
            id:req.params.id
        }
    })
    .then(item =>{
        return res.status(200).send(item)})
    .catch(err => console.error(err)) 
}
      
module.exports = MovieById;