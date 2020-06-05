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


// INICIO INGRESO -------------------------------------------------------------------------------------------------------------------------------------
    
    ingreso:(req, res) => {return res.render('ingreso',{error:req.query.Error});},

    /* Ruta de verficiacion de Usuario */

    verificar: (req, res) => { 
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                moduloLogin.validar(req.body.email)
                .then(resultado => {
                        console.log(resultado); // AQUÍ TENÉS AL USUARIO QUE ENCONTRASTE EN LA DB
                        if (resultado  == null){
                            // res.send("El E-mail NO esta en la base de datos")
                            res.redirect('/series/ingreso/' + '?Error=true')
                            console.log("El E-mail NO esta en la base de datos");
                        }else { 
                            if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña)) {  // Comparación de contraseñas
                                // Primer parámetro: contraseña del usuario cuando se loguea
                                // Segundo parámetro: contraseña del usuario en la DB
                                console.log("JOYA");
                                res.render("inicio")                    
                            } else {  
                                console.log("Te equivocaste BRO"); 
                                // res.send("Falló la validación")  
                                res.redirect('/series/ingreso/' + '?Error=true')
                            
                        }
                        }
                    })
                
            })
            .catch(error => {
                return res.send (error);
            })
    },

    
// ---------------------------------------------------------------------------------------------------------------------------------------- FIN INGRESO


// INICIO REGISTRO ------------------------------------------------------------------------------------------------------------------------------------

   registro:(req, res) => {return res.render('registro', {error:req.query.Error});},

 /* Ruta de almacenamiento de datos de los Usuarios */

    guardado:(req, res) => {
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                moduloLogin.validar(req.body.email, {
                    include: [{association: "resenas"}]
                } )
                .then(resultado => {
                        console.log(resultado); 
                        if (resultado  != null){
                            // res.send("El E-mail ya existe en la base de datos")
                            res.redirect('/series/registro/' +  '?Error=true') 
                            console.log("El E-mail NO esta en la base de datos");
                        }else { 
                            db.Usuario
                                .create({
                                    nombre_usuario: req.body.nombre_usuario,
                                    apellido_usuario: req.body.apellido_usuario,
                                    email: req.body.email,
                                //  id_usuario: req.body.Usuario,
                                    contraseña: bcrypt.hashSync(req.body.contraseña),
                                    fecha_nacimiento: req.body.fecha_nacimiento,
                                    generos_fav: req.body.generos_fav
                                })
                                .then(usuarioGuardado => {
                                    //return res.send(usuarioGuardado);
                                    return res.redirect('/series/ingreso');
                                })
                                .catch(error => {
                                    return res.send (error);
                                })
                        }
                })
            })
    },     

// ---------------------------------------------------------------------------------------------------------------------------------- FIN REGISTRO


    pagina1: (req, res) => {return res.render('inicio'); },

    pagina2: (req, res) => { return res.render('generos'); },

    pagina3:(req, res) => { return res.render('lista-generos'); },

    pagina4:(req, res) => { return res.render('buscado'); },

    pagina5:(req, res) => { return res.render('descripcion'); },

    pagina6:(req, res) => { return res.render('busc-avanzado'); },

    pagina7:(req, res) => {  return res.render('seriesFav');},

// INICIO RESEÑA -------------------------------------------------------------------

    pagina8:(req, res) => {  return res.render('login',{error:req.query.Error});},
    pagina11:(req, res) => {  return res.render('resenas');},

    mejores:(req, res) => {  return res.render('mejoresRes');},
    peores:(req, res) => {  return res.render('peoresRes');},
    recientes:(req, res) => {  return res.render('recientessRes');},

// ----------------------------------------------------------------------- FIN RESEÑA

    pagina9:(req, res) => {  return res.render('usuarios');},

    pagina10:(req, res) => {  return res.render('detalle_user');},

    guardar:(req,res) => {  return res.send(req.body);  }


};