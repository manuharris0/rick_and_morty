const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   // de parámetro va la instancia del sequelize
   sequelize.define('Favorite', {
   // método para crear la tabla, primer parámetro el nombre, y después los atributos como key value
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         notNull: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'), // ENUM es que puede ser solo las situaciones que están en paréntesis
         allowNull: false

      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'Unknown'),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
