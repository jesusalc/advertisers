var express = require('express');

var app = express();

app.get('/advertisers/?format=json', function(req, res) {
  res.status(200).json([[0,0,0],[0,0,0],[0,0,0]]);
});

app.get('/advertisers/?format=xml', function(req, res) {
  res.status(200).json([[0,0,0],[0,0,0],[0,0,0]]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports.app = app;