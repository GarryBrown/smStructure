var express = require('express');
var compression = require('compression');
var fs = require('fs');
var host = '127.0.0.1';

process.env.NODE_ENV = 'production';

var https = require('https');
var privateKey = fs.readFileSync('private.key', 'utf8');
var certificate = fs.readFileSync('hermes.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

console.log(process.env.NODE_ENV)
app.use(compression())
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, host, 1, function() {
  console.log('app is running')
});