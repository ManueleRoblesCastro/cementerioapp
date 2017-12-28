var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');
var AuthMiddleware = require('.././middleware/auth');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

//router.get('/menusxusuario/:id', controllers.sigcuocontroller.getJsonMenus);
router.get('/signin', controllers.UserController.getSignIn);
router.post('/signin', passport.authenticate('local', {
	//successRedirect : '/templates/nav',
	successRedirect : '/menu/nav',
	failureRedirect : '/signin',
	failureFlash : true 
}));
router.get('/logout', controllers.UserController.logout);
/* MENUS */
router.get('/menu/nav', AuthMiddleware.isLogged, controllers.UserController.getUserPanel);

/* PANTALLAS CEMENTERIO */
/*USUARIOS*/
router.get('/pantallas/usuarios', AuthMiddleware.isLogged, controllers.ControllerUsuario.getUsuarios);
router.get('/pantallas/editusuarios/:codigousuario', AuthMiddleware.isLogged, controllers.ControllerUsuario.getEditUsuarios);
router.post('/pantallas/saveusuario/:opcion', AuthMiddleware.isLogged, controllers.ControllerUsuario.postEditUsuarios);
router.get('/pantallas/addusuarios', AuthMiddleware.isLogged, controllers.ControllerUsuario.getUsuario);
router.post('/pantallas/delusuarios/', AuthMiddleware.isLogged, controllers.ControllerUsuario.postDelUsuario);
router.post('/pantallas/disableusuarios/', AuthMiddleware.isLogged, controllers.ControllerUsuario.postDisableUsuario);
/*DETALLE DE PLANILLA*/
router.get('/pantallas/detencabezadoplanilla/:idPlanilla/:idCatEmp', AuthMiddleware.isLogged, controllers.ControllerDetPlanilla.getDatosDetEncabezadoplanilla);
router.post('/pantallas/editarIDdetp', AuthMiddleware.isLogged, controllers.ControllerDetPlanilla.postEditidDetalle);

module.exports = router;
