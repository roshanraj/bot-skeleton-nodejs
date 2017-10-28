process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    // beforeEach((done) => {
    //     Book.remove({}, (err) => { 
    //        done();         
    //     });     
    // });
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
            chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.not.be.eql(0);
              done();
            });
      });
  });
});