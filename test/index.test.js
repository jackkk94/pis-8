const supertest = require('supertest');

const app = require('../index');

const request = supertest(app);

describe('Test Counter routes', () => {
  it('Test /about', async () => {
    const res = await request.get('/about');
    expect(res.text).toBe('<h3>Hello, jack!</h3>');
  });

  it('Test /', async () => {
    const res = await request.get('/');
    expect(res.text).toBe('0');
  });

  it('Test /stat', async () => {
    await request.get('/stat');
    const res = await request.get('/stat');
    expect(res.text).toBe('2');
  });

  afterAll((done) => {
    done();
  });
});
