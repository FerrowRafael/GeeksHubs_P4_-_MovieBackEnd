const db = require('../models');

const OrderIdM =(req, res) => {

    db.Movies.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))
        
}
  
      
module.exports = OrderIdM;