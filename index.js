const express = require('express');
const oktaClient = require('./oktaClient');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const hostname = '127.0.0.1';
const port = 3000;

app.post('/', (request, response) => {
  console.log(request.body)
  const userData = {
    profile: {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      login: request.body.email
    },
    credentials: {
      password: {
        value: request.body.password
      }
    }
  };
  oktaClient.createUser(userData)
  .then(user => {
    response.send(user)
  })
  .catch(error => console.log(error))
})

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});