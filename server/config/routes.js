var ninjas = require("../controllers/ninjas.js")
module.exports = function(app){

	app.get('/getNinja', function(req, res){
		ninjas.get(req, res);
	})
	app.patch('/updateNinja', function(req, res){
		ninjas.update(req, res);
	})
	app.delete('/deleteNinja', function(req, res){
		ninjas.remove(req, res);
	})

}