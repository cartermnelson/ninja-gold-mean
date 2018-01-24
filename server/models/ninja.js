var mongoose = require('mongoose');

var NinjaSchema = new mongoose.Schema({
	gold: {type: Number, default: 0},
});

mongoose.model('Ninja', NinjaSchema);