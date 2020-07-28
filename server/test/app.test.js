const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../server');


//endpoint tests

describe('GET /sites test', () => {
  it('should return status 200', () => {
    return supertest(app)
      .get('/sites')
      .expect(200)
  });
});

describe('GET /sites/:id test', () => {
    it('should return status 200', () => {
      return supertest(app)
        .get('/sites/2')
        .expect(200)
    });
  });

describe('POST /sites/:id test', () => {
    it('should return status 201', () => {
      return supertest(app)
        .post('/sites')
        .send({"name":"99th St Site", "location":"Santa Clarita", "price_range": 3})
        .expect(201)
    });
  });


describe('DELETE /sites/:id test', () => {
    it('should return status 200', () => {
      return supertest(app)
      .delete('/sites/51')
      .expect(204)
    });
  });

describe('PUT /sites/:id test', () => {
    it('should return status 200', () => {
      return supertest(app)
      .put('/sites/26')
      .send({"name":"102th St Site", "location":"Van Nuys, CA", "price_range": 3})
      .expect(200)
    });
  });

describe('POST /sites/:id/addReview test', () => {
    it('should return status 200', () => {
      return supertest(app)
      .post('/sites/2/addReview')
      .send({"site_id":2, "name":"Npm Test", "review": "Great!", "rating":4})
      .expect(201)
    });
  });

