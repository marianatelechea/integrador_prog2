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
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                if (resultado  == false ){
                    console.log("El E-mail NO esta en la base de datos");
                } else{
                    console.log("El E-mail esta en la base de datos");
                    moduloLogin.validar(req.body.email, bcrypt.hashSync(req.body.contraseña))
                    .then(validContra => {
                        console.log(validContra);
                  
                        
                       if (bcrypt.compareSync(req.body.contraseña, bcrypt.hashSync(req.body.contraseña))) {
                           //console.log(bcrypt.compareSync(req.body.contraseña, resultado.passEncriptada));
                           
                            console.log("JOYA");
                            res.send("true")                    
                        } else {  
                            console.log("Te equivocaste BRO"); 
                            res.send("false")  
                            
                        }
                    })
                }
            })
            .catch(error => {
                return res.send (error);
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

    // -------- PROBANDO EL TEMA DE REGISTRO -------------
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