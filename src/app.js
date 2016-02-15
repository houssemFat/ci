var express= require('express');
var app = new express();
app.use(function(req, res, next){
	res.send ('plz  jri again & again');
});
module.exports = app;
