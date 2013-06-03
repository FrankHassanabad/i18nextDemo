var express = require('express');

var app = express();

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.listen(80);

console.log('Listening on port 80, point your browser to http://localhost');