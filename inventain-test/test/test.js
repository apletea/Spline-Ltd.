/**
 * Created by apletea on 18.6.17.
 */
process.env.NODE_ENV = 'test';
let assert = require('assert'),
    chai = require('chai'),
    chaihttp = require('chai-http'),
    server = require('../src/server'),
    should = chai.should();

chai.use(chaihttp);

describe('api', () => {
   describe('POST /api/office/set',() => {
      it('should return office time updated', (done) => {
          let officeTime = {
              to: 1700,
              from : 900
          }
          chai.request(server)
              .post('/api/office/set')
              .send(officeTime)
              .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.data.should.be.eql('office time updated');
                 done();
              });
      });
   });
   describe('POST /api/request/booking', () => {
     it('should return request accepted', (done) => {
         let request = {
             timeOfSubmission : "2011-03-17 11:23:45" ,
             emp_id:"EMP004",
             timeBooking: "2011-03-22 16:00",
             duration:1
         }
         chai.request(server)
             .post('/api/request/booking')
             .send(request)
             .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.eql('request accepted');
                 done();
             });
     });
   });
   describe('GET /api/calendar/get', () => {
       it('should return array of objects', (done) => {
           chai.request(server)
               .get('/api/calendar/get')
               .end((err,res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                   done();
               });
       });
   })
});