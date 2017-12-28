//var sql = require('mysql2');
var models  = require('../models');
module.exports = {

	getDatosDetEncabezadoplanilla :  function (req, res, next){

		var idplanilla = req.params.idPlanilla;
		var idtipoplanilla =0;
		var idClas = req.params.idCatEmp;
		var Sencabezadoplanilla=null;
		var Sdetalleplanilla=null;

		models.sequelize.query(`SELECT idplanillaadmon, noquincena, mes, anio,
		monto, DATE_FORMAT(fechaingreso,'%d/%m/%Y') as fechaingreso, idtipoplanilla 
		FROM encabezadoplanilla WHERE idplanillaadmon=${idplanilla}`, 
		{ type: models.sequelize.QueryTypes.SELECT}).then(datosencabezadoplanilla => {

			Sencabezadoplanilla  =JSON.parse(JSON.stringify(datosencabezadoplanilla));
			//console.log(Sencabezadoplanilla[0].idtipoplanilla);
			idtipoplanilla = Sencabezadoplanilla[0].idtipoplanilla;

			models.sequelize.query(`SELECT 
			detalleencabezadoplanilla.iddetalleencabezadoplanilla ,
			detalleencabezadoplanilla.IDPersona,
			concat(PERSONASNATURALES.ApellidosPersona,' ',PERSONASNATURALES.NombresPersona) AS NombreCompleto,
			detalleencabezadoplanilla.salarionominal,
			detalleencabezadoplanilla.salariodiario,
			detalleencabezadoplanilla.diasdescontados,
			detalleencabezadoplanilla.horasextrasdiurnas,
			detalleencabezadoplanilla.horasextrasnocturnas,
			detalleencabezadoplanilla.montoshorasextras,
			detalleencabezadoplanilla.adelantosalarial,
			detalleencabezadoplanilla.afp,
			detalleencabezadoplanilla.isss,
			detalleencabezadoplanilla.otrosdescuentos,
			detalleencabezadoplanilla.salariosujetorenta,
			detalleencabezadoplanilla.isr,
			detalleencabezadoplanilla.totaldescuentos,
			detalleencabezadoplanilla.totalpagar
			FROM PERSONASNATURALES
			INNER JOIN EMPLEADO ON PERSONASNATURALES.IDPERSONA=EMPLEADO.IDPERSONA
			INNER JOIN CATEGORIAEMPLEADO ON CATEGORIAEMPLEADO.IDCATEGORIAEMPLEADO=EMPLEADO.IDCATEGORIAEMPLEADO
			INNER JOIN detalleencabezadoplanilla ON detalleencabezadoplanilla.IDPersona=personasnaturales.IDPersona
			WHERE detalleencabezadoplanilla.idplanillaadmon=${idplanilla}
			AND CATEGORIAEMPLEADO.idtipopuesto=${idtipoplanilla}`, 
			{ type: models.sequelize.QueryTypes.SELECT}).then(datosdetalleplanilla => {
    		// We don't need spread here, since only the results will be returned for select queries
    
		       	Sdetalleplanilla =JSON.parse(JSON.stringify(datosdetalleplanilla));

	       			models.sequelize.query(`select personasnaturales.IDPersona, 
	       			concat(personasnaturales.ApellidosPersona, ' ' , personasnaturales.NombresPersona) as Nombrepersona
	       			from personasnaturales inner join empleado on personasnaturales.IDPersona =empleado.IDPersona`, 
					{ type: models.sequelize.QueryTypes.SELECT}).then(empleadoslist => {

					res.render('pantallas/detalleplanilla', 
						{isAuthenticated : req.isAuthenticated(),
						user : req.user,
						Sencabezadoplanilla : Sencabezadoplanilla,
						Sdetalleplanilla : Sdetalleplanilla,
						empleadoslist : empleadoslist}
					);

				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});

			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});

		}).catch(Error => {
		console.log('Error para el registro: ' + Error);
		});

	},

	postEditidDetalle : function(req, res, next){
		var respuesta = {res: false};

		models.detalleencabezadoplanilla.update(
			{
				diaslaborados: req.body.iddetalledias,
				horasextrasdiurnas: req.body.iddetallehorad,
				horasextrasnocturnas: req.body.iddetallehoran,
				salariodiario : parseFloat((req.body.idsalarionom/30)*req.body.iddetalledias)
			},
			{
				where: { iddetalleencabezadoplanilla: req.body.iddetalle }
			}
		).then(datosingresados =>{
			//res.json({ datosingresados: datosingresados });
			respuesta.res =true;
			res.json(respuesta);
			console.log("Detalle actualizado");
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});

	}	

};