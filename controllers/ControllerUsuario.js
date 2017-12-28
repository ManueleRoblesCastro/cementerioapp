//var sql = require('mysql2');
var models  = require('../models');
module.exports = {

	getUsuarios :  function (req, res, next){

		models.Usuarios.findAll().then(datosusuarios =>{
			//res.json({ datosingresados: datosingresados });
			res.render('pantallas/usuarios', 
				{isAuthenticated : req.isAuthenticated(),
				user : req.user,
				datosusuarios : datosusuarios}
			);
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});		

	},

	getEditUsuarios :  function (req, res, next){
		var usuariosel = req.params.codigousuario;
		var usuarios = null;
		var usuarioselect = null;
		var perfiles = null; 

		models.Perfiles.findAll().then(allperfiles =>{
			if (allperfiles.length>0){ 
				perfiles = JSON.parse(JSON.stringify(allperfiles)); 

				models.Usuarios.findAll({attributes: 
					[
						'CodigoUsuario', 
						[
							models.sequelize.fn('concat', models.Usuarios.sequelize.col('ApellidosUsuario'), ' ' , models.Usuarios.sequelize.col('NombresUsuario')), 'NombreCompleto' 
						] 
					]}).then(allusuarios =>{
					//res.json({ datosingresados: datosingresados });
					if(allusuarios.length>0){
						usuarios = JSON.parse(JSON.stringify(allusuarios));

						models.Usuarios.findAll({ where: {CodigoUsuario: usuariosel } }).then(oneusuario => {

							if (oneusuario.length>0){
								//console.log('USUARIO: ' + users[0].dataValues.CodigoUsuario);
								usuarioselect = JSON.parse(JSON.stringify(oneusuario));

								models.Usuariosporperfil.findAll({ where: {CodigoUsuario: usuariosel} } ).then(perfilsel => {

									var perfilesxusuario =[];
									for (var ipu = 0; ipu < perfilsel.length; ipu++) {
										perfilesxusuario[ipu]=perfilsel[ipu].CodigoPerfil;
									};

									res.render('pantallas/editusuarios', 
										{isAuthenticated : req.isAuthenticated(),
										user : req.user,
										usuarioselect : usuarioselect,
										usuarios : usuarios,
										perfiles : perfiles,
										perfilsel : perfilesxusuario
										}
									);

								}).catch(Error => {
									console.log('Error para el registro: ' + Error);
								});
							}

						}).catch(Error => {
							console.log('Error para el registro: ' + Error);
						});		

					}
				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});				

			}
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});		

	},

	postEditUsuarios :  function (req, res, next){

		var opcion = req.params.opcion;
		var perfilesusr =JSON.parse(JSON.stringify(req.body.codperfiles));
		var singleperfil = [];
		if(perfilesusr[0].length==1){
			singleperfil.push(perfilesusr);
			perfilesusr = singleperfil;
		}
		//console.log(perfilesusr.length);
		models.Usuariosporperfil.destroy({ where: { CodigoUsuario: req.body.codusuarioadd }	});
		for (var ip = 0; ip <perfilesusr.length; ip++) {
			//console.log(perfilesusr[ip]);
			models.Usuariosporperfil.create({
				CodigoPerfil: perfilesusr[ip],
				CodigoUsuario: req.body.codusuarioadd,
			}).then(datosingresados =>{
				//res.json({ datosingresados: datosingresados });
				console.log('Perfil agregado para registro');			
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});			
		}
		//console.log(usuariosave);
		if (opcion==1){
			models.Usuarios.update(
				{
					ApellidosUsuario: req.body.apellidosusuario,
					NombresUsuario: req.body.nombresusuario,
					ClaveUsuario: req.body.codusuarioadd.substring(0,2),
					CorreoElectronicoUsuario: req.body.emailusuario,
					CodigoUsuarioSupervisor: req.body.codusuariosup,
					ActivoInactivoUsuario: req.body.codestadousuario,
					CodigoRolUsuario: '1',
					UbicacionFisicaUsuario: req.body.usuarioubicacion
				},
				{
					where: { CodigoUsuario: req.body.codusuarioadd }
				}
			).then(datosingresados =>{
				//res.json({ datosingresados: datosingresados });

				models.Usuarios.findAll().then(datosusuarios =>{
					//res.json({ datosingresados: datosingresados });
					res.render('pantallas/usuarios', 
						{isAuthenticated : req.isAuthenticated(),
						user : req.user,
						datosusuarios : datosusuarios}
					);
				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});		

			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});
		}

		if (opcion==2){

			models.Usuarios.create(
				{
					CodigoUsuario: req.body.codusuarioadd,
					ApellidosUsuario: req.body.apellidosusuario,
					NombresUsuario: req.body.nombresusuario,
					ClaveUsuario: req.body.codusuarioadd.substring(0,2),
					CorreoElectronicoUsuario: req.body.emailusuario,
					CodigoUsuarioSupervisor: req.body.codusuariosup,
					ActivoInactivoUsuario: req.body.codestadousuario,
					CodigoRolUsuario: '1',
					UbicacionFisicaUsuario: req.body.usuarioubicacion
				}
			).then(datosingresados =>{
				//res.json({ datosingresados: datosingresados });

				models.Usuarios.findAll().then(datosusuarios =>{
					//res.json({ datosingresados: datosingresados });
					res.render('pantallas/usuarios', 
						{isAuthenticated : req.isAuthenticated(),
						user : req.user,
						datosusuarios : datosusuarios}
					);
				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});		

			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});
		}		

	},

	getUsuario :  function (req, res, next){

		models.Perfiles.findAll().then(allperfiles =>{
			if (allperfiles.length>0){ 
				perfiles = JSON.parse(JSON.stringify(allperfiles)); 

				models.Usuarios.findAll({attributes: 
					[
						'CodigoUsuario', 
						[
							models.sequelize.fn('concat', models.Usuarios.sequelize.col('ApellidosUsuario'), ' ' , models.Usuarios.sequelize.col('NombresUsuario')), 'NombreCompleto' 
						] 
					]}).then(allusuarios =>{
					//res.json({ datosingresados: datosingresados });
					if(allusuarios.length>0){
						usuarios = JSON.parse(JSON.stringify(allusuarios));

						res.render('pantallas/addusuarios',
							{isAuthenticated : req.isAuthenticated(),
							user : req.user,
							usuarios : usuarios,
							perfiles : perfiles
							}
						);

					}
				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});				

			}
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});		

	},

	postDelUsuario :  function (req, res, next){
		var usuariosel = req.body.CodigoUsuario;
		var respuesta = {res: false};

		models.Usuariosporperfil.destroy(
			{ where: { CodigoUsuario: usuariosel }	}).then(datosborrados =>{
				//res.json({ datosingresados: datosingresados });
			console.log('Perfiles borrados');
			models.Usuarios.destroy(
				{ where: { CodigoUsuario: usuariosel }	}).then(datosborrados =>{
					//res.json({ datosingresados: datosingresados });
				console.log('Usuario borrado');
				respuesta.res =true;
				res.json(respuesta);
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});

		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});

	},

	postDisableUsuario :  function (req, res, next){
		var usuariosel = req.body.CodigoUsuario;
		var respuesta = {res: false};

		models.Usuarios.update(	{ ActivoInactivoUsuario: 'I' },
			{ where: { CodigoUsuario: usuariosel } }
		).then(datosingresados =>{
			console.log('Usuario Inactivado');
			respuesta.res =true;
			res.json(respuesta);
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});

	}

};