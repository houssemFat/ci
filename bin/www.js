var app = require('./../src/app');
var http = require('http');
var open = require('open');

var server = http.createServer(app);

server.listen('4000');

open('http://localhost:4000', function (err) {
        if (err) throw err;
        console.log("opened");
    }
);

