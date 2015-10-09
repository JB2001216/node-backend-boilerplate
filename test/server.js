import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const should = chai.should(),
      expect = chai.expect(),
      api = supertest('http://localhost:' + config.port);

describe('SimpleTest', () => {
  let server;
  beforeEach( () => server = require('../src/app') );
  afterEach( (done) => server.close(done) );

  it('should return a 200 response', (done) => {
    api.get('/sample_route/hello_world')
       .set('Accept', 'application/json')
       .expect(200, done);
  });

});
