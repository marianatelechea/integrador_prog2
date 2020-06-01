const db = require('../database/models');
const OP = db.Sequelize.Op;

// LOGIN ------------------------------------
let moduloLogin = require('../modulo-login'); 

// ENCRIPTACIÓN DE PASS ----------------------------------------

const bcrypt = require('bcryptjs');
let passEncriptada = bcrypt.hashSync('root', 10);    

// ----------------------------------------- FIN DE ENCRIPTACIÓN

module.exports = {

    // name: (req, res) => {
    //     let name = data.genres[i].name
    //     //return res.send(id_serie)
    //     res.render('detalle_user', {
    //         name: name
    //     })
    // },


    detalle: function(req, res){
        db.Usuario.findByPk(req.params.id_usuario,{
            include: [{association: "resenas"}]
        })
        .then(unUser => {
            res.render("detalle_user", {unUser:unUser})
        })
        .catch(error => {
            return res.send (error);
        })
    },

    //

};