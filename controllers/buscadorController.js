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
        db.Usuario.findAll({
            where: {
                [OP.or]: {
                    email: {
                        [OP.like]: "%" + req.query.searchUser +  "%"
                    }, 
                    nombre_usuario: {
                        [OP.like]: "%" + req.query.searchUser +  "%"
                    }
                }
            }
        })
        .then(function (resultados) {
      //  if (resultados.length !=  0) {
            res.render ('usuarios', {
                usuarios: resultados
            })
      /*  } else {
            res.send ('Not found')
        } */
        })
     /*   let filter = {};
        let q = req.query.email;
        let b = req.body.nombre_usuario;

        if (q){
            filter = {
                where: [ {
                    email: {[OP.like]: "%" + req.query.email +  "%"}
                } ]
            };
        } else if(b){
            filter = {
                where: [ {
                    email: {[OP.like]: "%" + req.body.nombre_usuario +  "%"}
                } ]
            };
        } */

      /*  db.Usuario.findAll(filter).then((usuarios) => {
            console.log(usuarios)
            if(usuarios != "") {
                //res.json(usuarios)
                res.render('usuarios', {
                    usuarios: usuarios
                })
            } else {
                //res.send("No encuentro")
                res.send('Not found')
            }
        }) */
    },
            
// --------------------------------------------------------------------
};
