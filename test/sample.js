import chai from 'chai';
import supertest from 'supertest';
import config from '../src/config';

const expect = chai.expect,
      api = supertest('http://localhost:' + config.port);

describe('SimpleTest', () => {

  it('should return a message response', (done) => {
    api.get('/sample_route/hello_world/Person')
       .set('Accept', 'application/json')
       .expect(200)
       .end((err, res) => {
         expect(res.body.message, 'Sample message response:').to.equal('Hello Person');
         done();
       });
  });

});
