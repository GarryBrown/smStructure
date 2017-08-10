var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
console.log('dirname:')
console.log(__dirname)
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});