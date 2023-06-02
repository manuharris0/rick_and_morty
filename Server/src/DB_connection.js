require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const favoriteModel = require('./models/Favorite');
const userModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`, { logging: false, native: false });

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
userModel(sequelize);
favoriteModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });
// Con estas dos lineas relacionamos las foreing keys de las dos tablas, en una relación de muchos es para muchos

module.exports = {
   User,
   Favorite,
   conn: sequelize,
   // esto es una instancia para conectar la base de datos
};
