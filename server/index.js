const axios = require('axios');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const token = process.env.GIT_TOKEN;

app.prepare()
  .then(() => {
    const server = express();

    server.get('/rest/user', (req, res) => {
      const githubEndpoint = 'https://api.github.com/graphql';
      const query = `
        query {
            user(login: "seancrater") {
                avatarUrl
                bio
                name
                contributionsCollection {
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                      }
                    }
                  }
                }
                repositoriesContributedTo(first: 25, privacy: PUBLIC) {
                  nodes {
                    name
                  }
                }
                starredRepositories(last: 25) {
                  nodes {
                    name
                  }
                }
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

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query);
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on port ${port}`)
    })
  })