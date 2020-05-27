// ------- PRUBA DOS DE RESEÑA ----------------------

const db = require('../database/models');
const OP = db.Sequelize.Op;

// LOGIN ------------------------------------
let moduloLogin = require('../modulo-login'); 

// ENCRIPTACIÓN DE PASS ----------------------------------------

const bcrypt = require('bcryptjs');
let passEncriptada = bcrypt.hashSync('root', 10);    

// ----------------------------------------- FIN DE ENCRIPTACIÓN

module.exports = {

    guarda_resena: (req, res) => {
        let user = {
            //  nombre_usuario: req.body.nombre_usuario,
            //  apellido_usuario: req.body.apellido_usuario,
                email: req.body.email,
            //  id_usuario: req.body.Usuario,
                contraseña: req.body.contraseña && passEncriptada,
            //  fecha_nacimiento: req.body.fecha_nacimiento,
        }

        let resena = {
            texto_resena: req.body.texto_resena,
            puntaje_serie: req.body.puntaje_serie
        }

        if( user != null ){
            moduloLogin.chequearUsuario(req.body.email)
                .then(resultado => {
                    if(resultado  == false ){
                        console.log("El E-mail NO esta en la base de datos");
                    } else{
                        db.Resena.create({
                            texto_resena: req.body.texto_resena,
                            puntaje_serie: req.body.puntaje_serie
                        })
                        .then(resenaGuardada =>{
                            return res.send(resenaGuardada)
                        })
                        .catch(error => {
                            return res.send (error);
                        })
                    }              
                })
        } else {
            console.log("Completar formulario");
            
        }

    }

};