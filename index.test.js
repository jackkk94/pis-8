import request from 'supertest';
import { it, describe } from 'mocha';
// eslint-disable-next-line import/extensions
import app from './index.js';

describe('Test Counter routes', () => {
  it('Test /about', () => request(app).get('/about').expect('<h3>Hello, jack!</h3>'));

  it('Test /', () => request(app).get('/').expect('0'));

  it('Test /stat', async () => {
    await request(app).get('/stat');
    return request(app).get('/stat').expect('2');
  });
});
