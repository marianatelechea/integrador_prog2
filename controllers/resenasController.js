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
        db.Resena.findAll({
            where: { id_serie: req.query.id },
            include: [{association: "usuario"}]
        })
        .then(resenas => {
                // res.send(resenas)
                res.render('descripcion', {
                    id_serie: id_serie,
                    resenas:resenas, // Aca es donde aparece el LISTADO DE RESEÑAS.
                    error: req.query.Error,
                })
        })
        .catch(error => {
            return res.send (error);
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
                                res.redirect('/series/registro') 
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
                                        res.redirect("/series/detalle?id=" + req.body.id_serie) 
                         
                                    })
                                    .catch(error => {
                                        return res.send (error);
                                    })

                                } else {  
                                    console.log("Te equivocaste BRO"); 
                                    res.redirect("/series/detalle?id=" + req.body.id_serie + "&Error=true")               
                                }
                            }
                    })
                    .catch(error => {
                        return res.send (error);
                    })             
                })

    },

//////////////////////////////   MIS RESEÑAS //////////////////////////////

    validar: (req, res) => { 
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                moduloLogin.validar(req.body.email, {
                    include: [{association: "resenas"}]
                } )
                .then(resultado => {
                        console.log(resultado); 
                        if (resultado  == null){
                            // res.send("El E-mail NO esta en la base de datos")
                            res.redirect('/series/resenas/' +  '?Error=true') 
                            console.log("El E-mail NO esta en la base de datos");
                        }else { 
                            if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña)) {
                                // console.log("JOYA");
                                //res.render("resenas")        
                                res.redirect('/series/resenas/' + resultado.id_usuario)
                            } else {  
                                console.log("Te equivocaste BRO"); 
                                // res.send("Falló la validación")  
                                res.redirect('/series/resenas/' +  '?Error=true') 
                            
                        }
                        }
                    })
                
            })
            .catch(error => {
                return res.send (error);
            })
    },

    user: (req, res) =>{
        db.Usuario.findByPk(req.params.id_usuario,{
            include: [{association: "resenas"}]
        })
        .then(unUser => {
               // res.json(unUser)
                res.render("resenas", {unUser:unUser})
        })
        .catch(error => {
            return res.send (error);
        })
    },

    //////////////////////////////   Editar reseñas del DB  //////////////////////////////
    
    editar: function(req, res){
        db.Usuario.findAll()
        .then((editar) => {

            db.Resena.findByPk(req.params.id)
            .then((editar) => {
                res.render("editarSerie", {
                    editar: editar,
                    error: req.query.Error
                })
            })

        })
    },

    actualizar: (req, res) => { 
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                moduloLogin.validar(req.body.email, {
                    include: [{association: "resenas"}]
                } )
                .then(resultado => {
                        console.log(resultado); 
                        if (resultado  == null){
                            // res.send("El E-mail NO esta en la base de datos")
                            res.redirect('/series/resenas/editar/' + req.params.id + '?Error=true')
                            console.log("El E-mail NO esta en la base de datos");
                        }else { 
                            if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña)) {
                                let resena = {
                                    texto_resena: req.body.texto_resena,
                                    puntaje_serie: req.body.puntaje_serie
                                }
                        
                                db.Resena.update(resena, {
                                    where: {
                                        id_resena: req.params.id
                                    }
                                })
                                .then((resultado) => {
                                    res.redirect('/series/resenas/')
                                })
                            } else {  
                                console.log("Te equivocaste BRO"); 
                                // res.send("Falló la validación")
                                res.redirect('/series/resenas/editar/' + req.params.id + '?Error=true')  
                            
                        }
                        }
                    })
                
            })
            .catch(error => {
                return res.send (error);
            })
    },
    


//////////////////// Elimiar resenas del DB ////////////////////

    porEliminar: function(req, res){
        db.Usuario.findAll()
        .then((borrar) => {

            db.Resena.findByPk(req.params.id)
            .then((borrar) => {
                res.render("borrarSerie", {
                    borrar: borrar,
                    error: req.query.Error
                })
            })

        })
    },

    delete: (req, res) => { 
        moduloLogin.chequearUsuario(req.body.email)
            .then(resultado => {
                moduloLogin.validar(req.body.email, {
                    include: [{association: "resenas"}]
                } )
                .then(resultado => {
                        console.log(resultado); 
                        if (resultado  == null){
                            // res.send("El E-mail NO esta en la base de dato")
                            res.redirect('/series/resenas/porEliminar/' + req.params.id + '?Error=true')
                            console.log("El E-mail NO esta en la base de datos");
                        }else { 
                            if (bcrypt.compareSync(req.body.contraseña, resultado.contraseña)) {
                                db.Resena.destroy({
                                    where: {
                                        id_resena: req.params.id
                                    }
                                })
                                .then((resultado) => {
                                    res.redirect('/series/resenas/')
                                })
                            } else {  
                                res.redirect('/series/resenas/porEliminar/' + req.params.id + '?Error=true')
                            
                        }
                        }
                    })
                
            })
            .catch(error => {
                return res.send (error);
            })
    },

//////////////////////////////   MEJOR - PEOR - RECIENTES => RESEÑAS //////////////////////////////

    mejores: (req, res) =>{
        db.Resena.findAll(req.body.texto_resena,{
            include: [{association: "usuario"}]
        })
        .then(resenas => {
            db.Resena.findAll({
                where: {
                    puntaje_serie: {
                         [OP.between]: [5, 10],         
                    }

                },
                order: [
                    ['puntaje_serie', 'DESC']
                ],
                    include: [{association: "usuario"}]
            })
            .then(resenas =>{
                //res.json(resenas)
                res.render("mejoresRes", {resenas:resenas})
            })
            .catch(error => {
                return res.send (error);
            })
              
        })
        .catch(error => {
            return res.send (error);
        })
    },

    peores: (req, res) =>{
        db.Resena.findAll(req.body.texto_resena,{
            include: [{association: "usuario"}]
        })
        .then(resenas => {
            db.Resena.findAll({
                where: {
                    puntaje_serie: {
                         [OP.between]: [0, 5],         
                    }

                },
                order: [
                    ['puntaje_serie', 'DESC']
                ],
                include: [{association: "usuario"}]
            })
            .then(resenas =>{
                //res.json(resenas)
                res.render("peoresRes", {resenas:resenas})
            })
            .catch(error => {
                return res.send (error);
            })
              
        })
        .catch(error => {
            return res.send (error);
        })
    },

    recientes: (req, res) =>{
        db.Resena.findAll(req.body.texto_resena,{
            include: [{association: "usuario"}]
        })
        .then(resenas => {
            db.Resena.findAll({
                order: [
                    ['fecha_actualizacion', 'DESC']
                ],
                include: [{association: "usuario"}]
            })
            .then(resenas =>{
                //res.json(resenas)               
                res.render("recientesRes", {resenas:resenas})
            })
            .catch(error => {
                return res.send (error);
            })
              
        })
        .catch(error => {
            return res.send (error);
        })
    },



    


   
};


