const db = require('../models');

const CineByPremiere = async (req, res) => {
    let title = req.params.name
    try {
        const cine = await db.Cines.findOne({
            where: { nombre:title },
            include: [{
                model: db.Movies,
                as: 'peliculasA',
                where: { isEstreno:true },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                through: { attributes: [] },
            }],
        });
        // console.log(JSON.stringify(cine));
        res.send(cine)
        
    } catch (error) {
        console.log(error);
    }
};
 
module.exports = CineByPremiere;