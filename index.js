// eslint-disable-next-line import/no-self-import, import/extensions
const server = require('./app.js');

const app = server(0);
app.listen(3000);
