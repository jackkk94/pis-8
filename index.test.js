import { it, describe } from 'mocha';
// eslint-disable-next-line import/extensions, no-unused-vars
import app from './index.js';

describe('Test Counter routes', () => {
  it('Test /about', () => (() => '<h3>Hello, jack!</h3>').expect('<h3>Hello, jack!</h3>'));
});
