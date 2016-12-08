var express = require('express');

var app = express();

app.get('/', function(req, res) {
  console.log("Server Running");
  res.status(200).
});

app.get('/api/init', function(req, res) {
  res.status(200).json([[0,0,0],[0,0,0],[0,0,0]]);
});

app.get('/advertisers/?format=json', function(req, res) {
  res.status(200).json('"name": "advertisers"');
});

app.get('/advertisers/?format=xml', function(req, res) {
  res.status(200).xml('<test></test>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports.app = app;