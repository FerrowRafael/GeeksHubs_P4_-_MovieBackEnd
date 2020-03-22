const db = require('../models');

const ActorByMovie = async (req, res) => {
    let nombre = req.params.name
    
    try {
        const actores = await db.Actores.findOne({
            where: { name: nombre},
            include: [{
                model: db.Movies,
                as: 'peliculasA',
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            }],
        });
        console.log(JSON.stringify(actores));
        res.send(actores)
        
    } catch (error) {
        console.log(error);
    }
};
 
module.exports = ActorByMovie;