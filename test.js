var supertest_request = require('supertest');
var app = require("./server.js").app;

describe('GET /advertisers/?format=json', function() {
  it.only('should server json file', function(done) {
    supertest_request(app)
      .get('/advertisers/?format=json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200).expect('"name": "advertisers"',done);
  });  
});

describe('GET /advertisers/?format=xml', function() {
  it('should server xml file', function(done) {
   supertest_request(app)
      .get('/advertisers/?format=json')
      .set('Accept', 'application/xml')
      .expect('Content-Type', /xml/)
      .expect(200).expect('<test></test>',done);

  });  
});





