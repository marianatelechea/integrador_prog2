const db = require('../database/models');
const OP = db.Sequelize.Op;

module.exports = {

    index:(req, res) => { return res.render('Carátula'); },

    ingreso:(req, res) => { return res.render('ingreso'); },

    registro:(req, res) => { return res.render('registro'); },

    pagina1: (req, res) => { return res.render ('inicio'); }, 

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