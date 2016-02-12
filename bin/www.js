var app = require('./../src/app');
var http = require('http');
var open = require('open');

var server = http.createServer(app);

server.listen('5000');

open('http://localhost:5000', function (err) {
        if (err) throw err;
        console.log("opened");
    }
);

