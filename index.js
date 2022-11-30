const Express = require('express');

const app = Express();
let counter = 0;

// eslint-disable-next-line no-console
app.get('/', (_, response) => {
  response.send(`${counter}`);
});

app.get('/stat', (_, response) => {
  // eslint-disable-next-line no-plusplus
  response.send(`${++counter}`);
});

app.get('/about', (_, response) => {
  response.send('<h3>Hello, jack!</h3>');
});

app.listen(3000);

module.exports = app;
