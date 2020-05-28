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

    id_serie: (req, res) => {
        let id_serie = req.query.id
        //return res.send(id_serie)
        res.render('descripcion', {
            id_serie: id_serie
        })
    },


    guarda_resena: (req, res) => {
        //return res.send(req.body)
            moduloLogin.chequearUsuario(req.body.email)
                .then(resultado => {
                    moduloLogin.validar(req.body.email)
                    .then(resultado=>{
                            if(resultado  == null ){
                                console.log("El E-mail NO esta en la base de datos");
                            } else{
                                if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña)) {

                                    db.Resena.create({
                                        id_usuario:resultado.id_usuario,
                                        id_serie: req.body.id_serie,
                                        texto_resena: req.body.texto_resena,
                                        puntaje_serie: req.body.puntaje_serie
                                    })
                                    .then(resenaGuardada =>{
                                        console.log(resenaGuardada)     
                                        return res.send(resenaGuardada)  
                         
                                    })
                                    .catch(error => {
                                        return res.send (error);
                                    })

                                } else {  
                                    console.log("Te equivocaste BRO"); 
                                    res.send("Falló la validación")                   
                                }
                            }
                    })             
                })

    },

    ver_resenas:(req,res) =>{ // Ver la reseña de todos los usuarios
        db.Resena
            .findAll()
            .then(resenas => {
            // video JAVI
            // return res.render('moviesIndex', {
              // listaPeliculas: movies  
            //})
                
            })
            .catch(error => {
                return res.send (error);
            })
    },

    mis_resenas: (req, res) => {
        db.Resena
            .findByPk()
            .then(resenas => {
                
            })
            .catch(error => {
                return res.send (error);
            })
    }

};


