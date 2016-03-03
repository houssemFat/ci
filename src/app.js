var express= require('express');
//
var app = new express();
//
app.use(function(req, res, next){
	//
	res.send ('JUST READ INSTRUCTIONS !!');
});
module.exports = app;
