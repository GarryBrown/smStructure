/**
 * Created by teligent on 15.06.17.
 */


var host = process.env.PORT ? '127.0.0.1' : '127.0.0.1';

var port = process.env.PORT || 8282;


var cors_proxy = require('cors-anywhere');

cors_proxy.createServer({

    originWhitelist: [],
    // Allow all origins
    setHeaders: [
      { "x-requested-with": "XMLHttpRequest" }
    ],

    requireHeader: ['x-requested-with'],

    removeHeaders: ['cookie', 'cookie2']

  })
  .listen(port, host, function() {
    console.log('Running CORS proxy on ' + host + ':' + port);
  });