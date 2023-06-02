const {User} = require('../DB_connection');

module.exports = postUser = async (req, res) => {
    // Toda consulta a una base de datos es asíncrona
    try {
        const {email, password} = req.body;
        // guardo la info que el usuario ponga por body (tipée en un input)
        if(!email || !password) return res.status(400).send('Faltan datos')
         // Caso en el que el usuario no ponga email y/o contraseña
        const user = await User.findOrCreate({where: {email, password}});
        // guardo en user la busqueda en la base de datos, si existe no hace nada, si no existe crea el registro
        return res.status(200).json(user);
        // Si todo sale bien devolvemos al usuario creado
    } catch (error) {
        return res.status(500).json(error.message);
        // Si algo salió mal, devolvemos el mensaje del error
    }
    
};