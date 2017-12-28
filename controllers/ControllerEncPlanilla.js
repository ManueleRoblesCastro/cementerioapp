//var sql = require('mysql2');
var models  = require('../models');
var dateFormat = require('dateformat');

module.exports = {

	getingre :  function (req, res, next){
		var fechaactual = new Date();
		var fechaYMD = dateFormat(fechaactual, 'dd/mm/yyyy');

				//console.log('aqui');

			models.encabezadoplanilla.findAll().then(datosfiltro =>{
				//res.json({ datosingresados: datosingresados });
				console.log(datosfiltro);
				res.render('pantallas/ingencabplanilla', 
					{isAuthenticated : req.isAuthenticated(),
					user : req.user,
					fechaDefault : fechaYMD,
					datosfiltro : datosfiltro}
				);
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});	
						

	},

	getingreMensual :  function (req, res, next){
		var fechaactual = new Date();
		var fechaYMD = dateFormat(fechaactual, 'dd/mm/yyyy');

				//console.log('aqui');

			models.encabezadoplanilla.findAll().then(datosfiltro =>{
				//res.json({ datosingresados: datosingresados });
				console.log(datosfiltro);
				res.render('pantallas/ingencabplanillamensual', 
					{isAuthenticated : req.isAuthenticated(),
					user : req.user,
					fechaDefault : fechaYMD,
					datosfiltro : datosfiltro}
				);
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});	
						

	},

	getDatosEncabezadoplanilla :  function (req, res, next){
		var fechaactual = new Date();
		var fechaYMD = dateFormat(fechaactual, 'dd/mm/yyyy');

			console.log(fechaactual);
			console.log(fechaYMD);

			models.encabezadoplanilla.findAll().then(datosfiltro =>{
				//res.json({ datosingresados: datosingresados });
				//console.log(datosfiltro);
				res.render('pantallas/encabezadoplanilla', 
					{isAuthenticated : req.isAuthenticated(),
					user : req.user,
					fechaDefault : fechaYMD,
					datosfiltro : datosfiltro}
				);
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});		

	},

	postEditEncabezado :  function (req, res, next){

		var opcion = req.params.opcion;

		
		if (opcion==2){

			models.encabezadoplanilla.create(
				{
					noquincena: req.body.idcodigoquincenasl,
					mes: req.body.idmessl,
					anio: req.body.idaniosl,
					monto: req.body.montotxt,
					codigousuario: 'SEOTERO',
					iddocumento: req.body.idodcumento,
					idtipoplanilla: req.body.idcategoriasl,
					idperiodoplanilla: 1,
					observaciones: req.body.idobservaciones
				}
			).then(datosingresados =>{
					res.redirect('/pantallas/encabezadoplanilla');
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});
		}// del if		

	}

};