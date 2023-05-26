const axios = rquire('axios');
// importo axios de manera Core
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, gender, origin } = await axios.get(`${URL}/${id}`).data
// en la petición con axios, se puede obviar el .get, esto devuelve una promesa, puede ser exitosa o erroneas, axios trae toda la informacion en una propiedad llamada data

        let character = {
            id, // también se puede el que viene por parámetro
            name,
            gender,
            origin, // acá estamos mandando el obj origin, después desde el front podremos entrar en su propiedad name
            image: data.image,
            status: data.status,
            species: data.species
            // las propiedades las pongo de las dos maneras, unas con destructuring y otras sin, para ver que se puede hacer con obj. literales 
        }
        return character.name ? res.json(character) : res.status(404).send('Not Found');
// En el caso de que haya propiedad nombre, significa que hay un personaje, por lo que lo devuelve, si no lo encuentra, responde con un 404
        
    } catch (error) {
        
    }



    .then((result) => result.data)
// con este método manejo la incertidumbre, en este caso la de éxito (es otra promesa), tiene una callback de parámetro (se puede llamar de cualquier manera, pero es el caso de éxito), retorna la propiedad data de la respuesta positiva, que es lo que pedimos
.then(({id, name, gender, origin}) => {
    // este segundo método, recibe una callback con otra promesa exitosa (value)
    if(name) {
        
        // esta promesa agarra la info y crea el obj. con la response que nos dió
        }
    })
    .catch((error) => res.status(500).send(error.message))
}

module.exports = getCharById;