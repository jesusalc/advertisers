var express = require('express');

var app = express();

app.get('/', function(req, res) {
  console.log("Server Running");
  res.status(200).send('Server Running');
});

app.get('/:file', function(req, res) {
  var filename = req.params.file
  res.json(require('./mock/'+filename));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports.app = app;