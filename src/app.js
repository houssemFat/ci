var express= require('express');
var app = new express();
app.use(function(req, res, next){
	res.send ('plz  jri again ');
});
module.exports = app;
