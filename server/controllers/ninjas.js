var mongoose = require('mongoose');
var Ninja = mongoose.model('Ninja')
module.exports = {
	get: function(req, res){
		Ninja.findOne({}, function(err, ninja){
			if(err){
				res.json(err);
			}
			else if(!ninja){
				let nin = new Ninja()
				nin.save(function(err, ninja){
					if(err){
						res.json(err);
					}
					else{
						res.json(ninja);
					}
				})
			}
			else{
				console.log(ninja);
				res.json(ninja);
			}
		})
	},
	update: function(req, res){
		Ninja.findOneAndUpdate({}, {$set: {gold: req.body.gold}}, {new: true}, function(err, ninja){
			if(err){
				res.json(err);
			}
			else{
				res.json(ninja);
			}
		})
	},
	remove: function(req, res){
		Ninja.remove({}, function(err, status){
			if(err){
				res.json(err);
			}
			else{
				res.json(status);
			}
		})
	}
}