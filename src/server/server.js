var connect = require("connect"),
  serveStatic = require("serve-static"),
  // proxy = require("http-proxy-middleware"),
  fs = require('fs'),
  https = require('https'),
  port = 443;


const options = {
    key: fs.readFileSync('./hermes-mobile.key', 'utf8'),
    cert: fs.readFileSync('./hermes-mobile.crt', 'utf8')
  }
  // var targetProxy = proxy({
  //   // target: "https://192.168.210.36:8443",
  //   target: "https://gateway.hermes-mobile.ru:8443",
  //   changeOrigin: true,
  //   logLevel: 'debug',
  //   //ssl: options,
  //   secure: false
  // });

var app = connect();
// app.use("/api", targetProxy);


// app.use(function(req, res) {
//   res.end('Hello from Connect!\n');
// });
app.use(serveStatic(__dirname + '/../../dist'));


// app.use('/kpi', function(req, res, next) {
//   //Path to your main file
//   res.end();
// });

https.createServer(options, app).listen(port);

console.log("server starting at " + port);



// example
// https://github.com/chimurai/http-proxy-middleware/tree/master/recipes