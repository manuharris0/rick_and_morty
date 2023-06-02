const express = require('express');
const server = express();
const morgan = require('morgan');
const router  =  require('./routes/index');

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty', router);

conn.sync({force: true});
   // lo del objeto es para que se dropee los datos de la base de datos, esto es para la etapa de desarrollo, una vez este la app para salir se deja en false
  
// La sincronización es una promesa, por lo que cuando se responda exitosa, se levante el servidor
server.listen(3001, () => console.log('listening to PORT: 3001'));
