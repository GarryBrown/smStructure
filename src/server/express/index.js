var express = require('express');
var compression = require('compression');
var fs = require('fs');
var port = '0.0.0.0';

process.env.NODE_ENV = 'production';

var https = require('https');
var privateKey = fs.readFileSync('private.key', 'utf8');
var certificate = fs.readFileSync('hermes.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

var app = express();

console.log(process.env.NODE_ENV)
app.use(compression())
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, port, 1, function() {
  console.log('app is running')
});