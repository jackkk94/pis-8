const Express = require('express');

module.exports = (counter) => {
  const app = Express();
  app.get('/', (_, response) => {
    response.send(`${counter}`);
  });

  app.get('/stat', (_, response) => {
    // eslint-disable-next-line no-plusplus, no-param-reassign
    response.send(`${++counter}`);
  });

  app.get('/about', (_, response) => {
    response.send('<h3>Hello, jack</h3>');
  });

  return app;
};
