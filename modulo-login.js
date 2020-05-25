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

    validar: function (email, root) {
        return db.Usuario.findOne({
            where:{
                email: email,
                contraseña: root
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;