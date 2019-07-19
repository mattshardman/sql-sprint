const express = require('express');
const projectRouter = require('./projects/projectRouter');


const server = express();
server.use(express.json());
server.use('/api/projects', projectRouter);



server.get('/', (req, res) => {
  res.send(`<h2>Node DB Challenge</h2>`);
});

module.exports = server;