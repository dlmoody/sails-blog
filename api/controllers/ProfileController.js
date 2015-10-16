/**
 * ProfileController
 *
 * @description :: Server-side logic for managing Profiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	edit: function(req, res){
		//only edit current users Profile
		User.findOneByEmail(req.user.email)
				.exec(function(err, user){
					if(err){
						res.notFound(err);
					}
					var data = {
						user: user
					};
					console.log(JSON.stringify(data));
					res.view(data)
				})
	},
	update: function(req,res){
		debugger;
		User.update({email: req.user.email}, req.body)
				.exec(function(err, updated){
					 if(err){
						 res.serverError(err);
					 }
			 	 		sails.log('User update with first and last name to ' + updated[0].firstName + ' and ' + updated[0].lastName);
						res.view('./Profile/edit', {user: updated[0]});
		 		})

	}
};
