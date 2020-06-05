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

    // INICIO BUSCADOR DE USUARIOS -----------------------------------------------------

    busqueda: function(req, res) {
        db.Usuario.findAll({
            where: {
                [OP.or]: {
                    email: { [OP.like]: "%" + req.query.searchUser + "%" },
                    nombre_usuario: { [OP.like]: "%" + req.query.searchUser + "%" },
                }
            }
        })
        .then((usuarios) => {
            console.log(usuarios)
                // res.json(usuarios)
                res.render('usuarios', {
                    usuarios: usuarios,
                    busqueda: req.query.busqueda
                })
        })
    }

// --------------------------------------------------------------------------------------


};
