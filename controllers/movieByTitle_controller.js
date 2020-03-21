const db = require('../models/')
const Op = require('sequelize').Op;

// QUERY
// SELECT * FROM `movies` WHERE `titulo` LIKE '%ME%'

async function MoviesByTitle (req,res) {
        
    const title = req.params.name
    console.log(title)
    try{
        const movie = await db.Movies.findAll(
            {where: {
               titulo:{
                [Op.like]: `%${title}%`
               } 
            }}
        )
        console.log(movie)
        if(movie){
            return res 
            .status(200)
            .send(movie)
        }
       
    }catch(error){
        console.error('Algo fallo')
    }

} 

// const MoviesByTitle = (req, res) => {

//     db.Movies.findAll({
//         where:{
//             titulo:req.params
//         }
//     })
//     .then(item =>{
//         return res.status(200).send(item)})
//     .catch(err => console.error(err)) 
// }


module.exports = MoviesByTitle;