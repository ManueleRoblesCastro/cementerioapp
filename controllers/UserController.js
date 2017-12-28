//var sql = require('mysql2');
var models  = require('../models');
module.exports = {

	getSignIn : function (req, res, next){
		return res.render ('user/signin', {message : req.flash('info'), authmessage : req.flash('authmessage') });
	},	

	logout : function (req, res, next){

		if (req.user!=undefined)
		{
			var codigousuarioin = req.user.CodigoUsuario;

			models.UsuariosEnSesion.create({
				CodigoUsuario: codigousuarioin
			}).then(datosingresados =>{
				//res.json({ datosingresados: datosingresados });
				req.logout();
				res.redirect('/signin');	
			}).catch(Error => {
				console.log('Error para el registro: ' + Error);
			});

		}
		else{
			req.logout();
			res.redirect('/signin');
		}
	},

	getUserPanel : function (req, res, next){
		//console.log(req.user);
		var codigousuarioin = req.user.CodigoUsuario;

		models.UsuariosEnSesion.create({
			CodigoUsuario: codigousuarioin
		}).then(datosingresados =>{
			//res.json({ datosingresados: datosingresados });
			res.render('menu/nav', {
				isAuthenticated : req.isAuthenticated(),
				user : req.user
			});
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});	    

	}

};