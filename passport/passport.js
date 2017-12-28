var LocalStrategy =  require('passport-local').Strategy;
var models  = require('../models');
//var sql = require('mysql2');

module.exports = function(passport){

	passport.serializeUser (function (user, done){
		done(null, user);
	});

	passport.deserializeUser (function (obj, done){
		done(null, obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback : true
	}, function(req, username, password, done){
		var CodPerfil =null, Sperfiles = '';

		models.Usuarios.findAll({ where: {CodigoUsuario: username , ClaveUsuario: password, ActivoInactivoUsuario: 'A'} }).then(users => {
			//console.log(users.length);
			if (users.length>0){
				//console.log('USUARIO: ' + users[0].dataValues.CodigoUsuario);
				models.Usuariosporperfil.findAll({ where: {CodigoUsuario: username} }).then(perfiles => {
					if (perfiles.length>0){
						//console.log(perfiles[0].dataValues.CodigoPerfil);
						CodPerfil =JSON.parse(JSON.stringify(perfiles));
						console.log( CodPerfil );

						models.sequelize.query(`SELECT perfiles.NombrePerfil, perfiles.CodigoPerfil 
							FROM usuariosporperfil INNER JOIN perfiles
							ON usuariosporperfil.CodigoPerfil = perfiles.CodigoPerfil
							WHERE usuariosporperfil.CodigoUsuario ='${username}'`, 
							{ type: models.sequelize.QueryTypes.SELECT}).then(perfilesusers => {
						    // We don't need spread here, since only the results will be returned for select queries
						    if (perfilesusers.length>0){

						    	Sperfiles =JSON.parse(JSON.stringify(perfilesusers));
						    	//console.log(Sperfiles);
								return done(null, {
							 		CodigoUsuario : users[0].dataValues.CodigoUsuario,
							 		NombresUsuario : users[0].dataValues.NombresUsuario,
							 		ApellidosUsuario : users[0].dataValues.ApellidosUsuario,
							 		CodigoPerfil : CodPerfil,
							 		Perfiles : Sperfiles
							 	});

						    }
						}).catch(Error => {
							console.log('Error para el registro: ' + Error);
						});
					}
					else{
						return done(null, false, req.flash('authmessage', 'Usuario sin perfil(es).'));
					}
				}).catch(Error => {
					console.log('Error para el registro: ' + Error);
				});

			}
			else{
				return done(null, false, req.flash('authmessage', 'Usuario inactivo o contraseña incorrecta.'));
			}

		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});

	}
	));

};