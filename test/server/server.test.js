const request = require('supertest');
const expect = require('expect')

var app = require('./server').app;

it('should return Hello world', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found'
      })
    })
    .end(done);
});

it('should return users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Daniel',
        age: 25
      });
    })
    .end(done);
});