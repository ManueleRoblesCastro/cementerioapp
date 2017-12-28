//home controller
module.exports = {
	//funciones del controlador

	index : function (req, res, next){
		res.render('user/signin', {
					message : {},
					authmessage : {},
					isAuthenticated : req.isAuthenticated(),
					user : req.user
				});
	}

}