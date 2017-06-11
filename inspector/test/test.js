let assert = require('assert'),
    chai = require('chai'),
    chaihttp = require('chai-http'),
    server = require('../src/server'),
    should = chai.should();

chai.use(chaihttp);

describe('Array', function() {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });

        it('should return 0', () => {
            assert.equal(0,[1,2,3].indexOf(1));
        })
    });
});

describe('api', () => {
   describe('GET /api/kosher/all', () => {
       it('should return array of objects', (done) => {
            chai.request(server)
                .get('/api/kosher/all')
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(20);
                  done();
                });
       });
   })
});

