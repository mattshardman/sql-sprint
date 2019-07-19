const express = require('express');
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');


const server = express();
server.use(express.json());
server.use(logger);
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


server.get('/', (req, res) => {
  res.send(`<h2>Node DB Challenge</h2>`);
});

// Logging middleware
function logger(req, res, next) {
	const loggedData = {
		method: req.method,
    url: req.url,
    body: req.body || '',
		timestamp: new Date()
	};
	console.log(loggedData);
	next();
}

module.exports = server;