var supertest_request = require('supertest');
var app = require("./server.js").app;


describe('GET /api/init', function() {
  it('should give initial state', function(done) {
    supertest_request(app)
      .get('/api/init')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function(e,d){
        console.log(e, d.body);
        done();
      });
  });  
});






