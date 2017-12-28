//var sql = require('mysql2');
var models  = require('../models');
module.exports = {


	getPersonasNat :  function (req, res, next){

		models.personasNaturales.findAll().then(datospernat =>{
			//res.json({ datosingresados: datosingresados });
			res.render('pantallas/personasnat', 
				{isAuthenticated : req.isAuthenticated(),
				user : req.user,
				datospernat : datospernat}
			);
		}).catch(Error => {
			console.log('Error para el registro: ' + Error);
		});		

	}

};