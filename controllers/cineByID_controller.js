const db = require('../models');

const OrderIdC =(req, res) => {

    db.Cines.findOne({
        where:{
            id:req.params.id
        }
    }).then(item =>{
        return res.status(200).send(item)})
        .catch(err => console.error(err))        
}
      
module.exports = OrderIdC;