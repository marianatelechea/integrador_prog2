// ------- BUSCARDOR USUARIO ----------------------

const db = require('../database/models');
const OP = db.Sequelize.Op;

// LOGIN ------------------------------------
let moduloLogin = require('../modulo-login'); 

// ENCRIPTACIÓN DE PASS ----------------------------------------

const bcrypt = require('bcryptjs');
let passEncriptada = bcrypt.hashSync('root', 10);    

// ----------------------------------------- FIN DE ENCRIPTACIÓN

module.exports = {
    // INICIO BUSCADOR DE USUARIOS ----------------------------------------

    // ... Comment -->  index: function(req, res) {res.render('usuarios')},
    busqueda: function(req, res) {
        db.Usuario
            .findAll({
                where:{email:{[OP.like]: '%' + req.query.email  + '%'}}
            })
            .then(
                function(userBuscado){
                    if (userBuscado.length == 0) {
                        res.render('usuarios',{
                            userBuscado: "No exite usuario para esta busqueda"
                        })
                    }
                }
            )
    }


// --------------------------------------------------------------------
};
