const db = require('../database/models');
const OP = db.Sequelize.Op;

// LOGIN ------------------------------------
let moduloLogin = require('../modulo-login'); 

// ENCRIPTACIÓN DE PASS ----------------------------------------

const bcrypt = require('bcryptjs');
let passEncriptada = bcrypt.hashSync('root', 10);    

// ----------------------------------------- FIN DE ENCRIPTACIÓN

module.exports = {

    index:(req, res) => { return res.render('Carátula');},


// INICIO INGRESO --------------------------------------------
    
    ingreso:(req, res) => {return res.render('ingreso');},

    /* Ruta de verficiacion de Usuario */

    verificar: (req, res) => { 
        moduloLogin.validar(req.body.email, req.body.contraseña)
            .then(resultado => {
                if (req.body.email  == false ){
                        res.send(resultado)  
                }
                else if (req.body.contraseña == false){
                        res.send(resultado)
                } else {
                    res.redirect("/series/inicio")
                }
        })
    },
    
// ----------------------------------------------- FIN INGRESO


// INICIO REGISTRO --------------------------------------------

    registro:(req, res) => { db.Usuario.findAll()
        .then(usuarios => {
            return res.render ("registro");
        })
        .catch (error =>{
        return res.send (error);
        })   
    },

    /* Ruta de almacenamiento de datos de los Usuarios */

    // -------- PROBANDO EL TEMA DE RENAS -------------
    guardado:(req, res) => {
        db.Usuario
            .create({
                nombre_usuario: req.body.nombre_usuario,
                apellido_usuario: req.body.apellido_usuario,
                email: req.body.email,
            //  id_usuario: req.body.Usuario,
                contraseña: req.body.contraseña && passEncriptada,
                fecha_nacimiento: req.body.fecha_nacimiento,
            })
            .then(usuarioGuardado => {
                return res.send(usuarioGuardado);
            })
            .catch(error => {
                return res.send (error);
            })
    }, 
    // -------------------------------------------------
    

// ----------------------------------------------- FIN REGISTRO


    pagina1: (req, res) => {return res.render('inicio'); },

    pagina2: (req, res) => { return res.render('generos'); },

    pagina3:(req, res) => { return res.render('lista-generos'); },

    pagina4:(req, res) => { return res.render('buscado'); },

    pagina5:(req, res) => { return res.render('descripcion'); },

    pagina6:(req, res) => { return res.render('busc-avanzado'); },

    pagina7:(req, res) => {  return res.render('seriesFav');},

// INICIO RESEÑA -------------------------------------------------------------------

    pagina8:(req, res) => {  return res.render('resenas');},

    

// ----------------------------------------------------------------------- FIN RESEÑA

    pagina9:(req, res) => {  return res.render('usuarios');},

    pagina10:(req, res) => {  return res.render('detalle_user');},

    guardar:(req,res) => {
        return res.send(req.body);
    }


};