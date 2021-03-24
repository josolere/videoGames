const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    releaseDate:{
      type:DataTypes.DATE
    },
    rating:{
      type:DataTypes.DOUBLE      
    },
    platforms:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    }
  });
};
