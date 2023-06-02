const {Favorite} = require('../DB_connection');

module.exports = async(req, res) => {
    try {
        const {id} = req.params;
        // El id llega por params, cuando el usuario cliquée el boton de borrar
        await Favorite.destroy({where: {id}});
        // el destroy() busca por id y lo elimina
        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites);
        // por defecto el status es 200
    } catch (error) {
        return res.status(500).send({error: message});
    }
};