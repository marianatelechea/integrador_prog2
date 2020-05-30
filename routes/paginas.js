var express = require('express');
var router = express.Router();

/* Vamos a requerir el controlador */

const controllers = require('../controllers/seriesController.js');
const controResena = require('../controllers/resenasController.js');
const controBucador = require('../controllers/buscadorController.js');
const controUser = require('../controllers/userController.js');
// PAGINA 0

router.get('/', controllers.index);



// PAGINA INGRESO ----------------------------------------------------

/* En el link http://localhost:3000/series/ingreso es donde se va a mostrar el el view donde ingresar */
router.get('/ingreso', controllers.ingreso);

/* En el link http://localhost:3000/series/verificar es donde se verificara la info */
router.post('/verificar', controllers.verificar);

// ------------------------------------------------ Fin PAGINA INGRESO



// PAGINA REGISTRO -----------------------------------------------------


/* En el link http://localhost:3000/series/registro es donde se va a mostrar el el view donde registrarnos */
router.get('/registro', controllers.registro);

/* En el link http://localhost:3000/series/guardar es donde se va a mostrar en formato JSON los datos de la registración */
router.post('/guardar', controllers.guardado);

// ----------------------------------------------- Fin PAGINA REGISTRO 

// PAGINA 1 

router.get('/inicio', controllers.pagina1);

// PAGINA 2 

router.get('/generos', controllers.pagina2);

// PAGINA 3

router.get('/lista-generos', controllers.pagina3);

// PAGINA 4 

router.get('/buscador', controllers.pagina4);

// PAGINA 5 

router.get('/detalle', controResena.id_serie);


//router.get("/listado", controResena.listado);

//router.get("/usuario", controResena.usuario);



// PAGINA 6 

router.get('/busc-avanzado', controllers.pagina6);

// PAGINA 7 

router.get('/favoritos', controllers.pagina7);

// PAGINA 8 (resenias) ------------------------------------------------------------------------------

router.get('/resenas', controllers.pagina8);

router.post('/guardado_resena', controResena.guarda_resena); 



/////////////////

// router.get('/resenas', controResena.listado);

// router.get('/detalle', controResena.detalle);

// router.get('/usuarios', controUser.listado);

// router.get('/detalle', controUser.detalle);

//router.get('/detalle/:id', controResena.info_serie);

// -------------------------------------------------------------------------------------------------

// PAGINA 9 (busc-usuarios)

router.get('/busc-usuarios', controllers.pagina9);

router.get('/buscUser', controBucador.busqueda);

// PAGINA 10 (detalle-usuario)

router.get('/detalle-usuario/', controllers.pagina10);

module.exports = router;
