const db = require('../database/models');
const OP = db.Sequelize.Op;

module.exports = {

    index:(req, res) => { return res.render('Carátula');},

    ingreso:(req, res) => { 
        db.Usuario.findAll()
            .then(usuarios => {
                return res.render ("ingreso", {usuarios:usuarios});
            })
            .catch ((error) =>{
            return res.send (error);
            })  
    },

    // INICIO REGISTRO

    registro:(req, res) => { db.Usuario.findAll()
        .then(usuarios => {
            return res.render ("registro");
        })
        .catch (error =>{
        return res.send (error);
        })   
    },

        /* Ruta de almacenamiento de datos de los Usuarios */

    guardado:(req, res) => {
        db.Usuario
            .create({
                nombre_usuario: req.body.nombre_usuario,
                apellido_usuario: req.body.apellido_usuario,
                email: req.body.email,
            //  id_usuario: req.body.Usuario,
                contraseña: req.body.contraseña,
                fecha_nacimiento: req.body.fecha_nacimiento,
            })
            .then(usuarioGuardado => {
                return res.send(usuarioGuardado);
            })
            .catch(error => {
                return res.send (error);
            })

            //.create({
           // nombre_usuario: req.body,
           // apellido_usuario: req.body,
           // email: req.body,
           // //id_usuario: req.body.Usuario,
           // contraseña: req.body,
           // fecha_nacimiento: req.body,
       // });

        //res.redirect("/series")
    },
    
    // FIN REGISTRO

    pagina1: (req, res) => {return res.render('inicio'); },

    pagina2: (req, res) => { return res.render('generos'); },

    pagina3:(req, res) => { return res.render('lista-generos'); },

    pagina4:(req, res) => { return res.render('buscado'); },

    pagina5:(req, res) => { return res.render('descripcion'); },

    pagina6:(req, res) => { return res.render('busc-avanzado'); },

    pagina7:(req, res) => {  return res.render('seriesFav');},

    pagina8:(req, res) => {  return res.render('reseñas');},

    guardar:(req,res) => {
        return res.send(req.body);
    }


};