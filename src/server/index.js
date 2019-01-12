const axios = require('axios');
const express = require('express');
const app = express();

const port = 80;
const token = process.env.GIT_TOKEN;

app.get('/rest/user', (req, res) => {
  const githubEndpoint = 'https://api.github.com/graphql';
  const query = `
    query {
        user(login: "seancrater") {
            login
            name
            bio
            avatarUrl
        }
    }
  `;
  axios.post(githubEndpoint, { query }, {
    headers: {
      'Authorization': `bearer ${token}`
    }
  })
    .then(({ data }) => {
      res.send(data);
    })
    .catch(error => {
      throw new Error(error);
    });
});

app.get('/', (req, res) => {
  res.send('SSR components will go here');
});

app.listen(port, () => console.log(`Server started!`));