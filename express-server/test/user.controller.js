import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Users', () => {
//check for positive case
  it('should add a new user', () =>
    request(Server)
      .post('/api/user')
      .send({ id: 3,name: 'test',ttl:300 })
      .expect(201)
    );
//check for negative case
  it('should add a new user', () =>
    request(Server)
      .post('/api/user')
      .send({ id: 3,name: 'test',ttl:300 })
      .expect(409)
  );
//GET all users
  it('should get all users', () =>
    request(Server)
      .get('/api/user')
      .expect(200)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object');
  }));

//GET all user by id
  it('should get an user by id', () =>
    request(Server)
      .get('/api/user/3')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('test');
  }));
//DELETE user by id
  it('Delete user by id', () =>
    request(Server)
      .delete('/api/user/3')
      .expect(200)
  );

});
