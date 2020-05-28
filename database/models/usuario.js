module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        nombre_usuario: {
            type: dataTypes.STRING
        },
        apellido_usuario: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        id_usuario:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        contraseña: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias, cols, config);

// En este punto, lo que buscamos hacer es la relación entre las tablas
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Resena, { // .Resena: Es el nombre del alias del modelo Resena.js
            as: "resenas", // Del Usuario voy a pedir las muchas reseñas que tiene
            foreignKey: "id_usuario"
        });
    }

    return Usuario;
}