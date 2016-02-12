var app = require ('src/app/');
var http = require('http');
var open = require('open');

var server = http.createSever(app);
server.listen('4000');
open('localhost:4000', function (err){
	if (err) throw err;
	console.log ("opened");
}

