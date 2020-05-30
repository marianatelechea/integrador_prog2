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
        let filter = {};
        let q = req.query.email;

        if (q){
            filter = {
                where: [ {
                    email: {[OP.like]: "%" + req.query.email +  "%"}
                } ]
            };
        }

        db.Usuario.findAll(filter).then((usuarios) => {
            //res.json(usuarios)
            res.render('usuarios', {
                usuarios:usuarios
            })
        })
    } 
            
// --------------------------------------------------------------------
};
