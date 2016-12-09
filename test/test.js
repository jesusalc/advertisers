var supertest_request = require('supertest'),
    app = require("../server.js").app,
    fs = require("fs");

describe('GET /advertisers/?format=json', function() {
  it('should serve json file', function(done) {
    supertest_request(app)
      .get('/advertisers/?format=json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200).expect(require('../mock/advertisers.json'),done);
  });  
});

describe('GET /advertisers/?format=xml', function() {
  it('should serve xml file', function(done) {
    supertest_request(app)
      .get('/advertisers/?format=xml')
      .set('Accept', 'application/xml')
      .expect('Content-Type', /xml/)
      .expect(200).expect(fs.readFileSync('./mock/advertisers.xml', 'utf8'), done);
  });
});





