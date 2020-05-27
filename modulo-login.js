let db = require('./database/models');
const OP = db.Sequelize.Op;

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.Usuario.findOne({
            where: {
                email: email
            }
        })
        .then(function(nombre_usuario) {
            return nombre_usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.Usuario.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.Usuario.findOne({
            where:{
                email: email,
                // contraseña: pass // no es necesario. esto pincha si se implementa
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;