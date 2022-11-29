import Express from 'express';
const app = Express()
let counter = 0;

console.log("hello")
app.get('/',(_, response) => {
  response.send(`${counter}`);
});

app.get('/stat',(_, response) => {
  response.send(`${++counter}`);
});

app.get('/about',(_, response) => {
  response.send(`<h3>Hello, jack!</h3>`);
});


//app.listen(3000);