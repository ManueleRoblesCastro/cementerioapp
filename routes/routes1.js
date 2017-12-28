var express = require('express');
var router1 = express.Router();
//var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');


/*menus seotero*/
router1.get('/pantallas/personasNat', AuthMiddleware.isLogged, controllers.ControllerPersonas.getPersonasNat);

router1.get('/pantallas/addplanilla', AuthMiddleware.isLogged, controllers.ControllerEncPlanilla.getingre);
router1.get('/pantallas/addplanillaMen', AuthMiddleware.isLogged, controllers.ControllerEncPlanilla.getingreMensual);
router1.post('/pantallas/saveencabezado/:opcion', AuthMiddleware.isLogged, controllers.ControllerEncPlanilla.postEditEncabezado);


router1.get('/pantallas/encabezadoplanilla', AuthMiddleware.isLogged, controllers.ControllerEncPlanilla.getDatosEncabezadoplanilla);



module.exports = router1;
